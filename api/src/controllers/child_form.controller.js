const db = require('../models/index');
const childForm = db.childForm;
const childImage = db.childImage;
const cartTable = db.cartTable;
const { Op } = require('sequelize');
const path = require('path');
const multer = require('multer');

// Configure Multer storage
const childPicStorage = multer.diskStorage({
    destination: (req, file, cb) => {
        const destinationPath = path.join(__dirname, '../../public/childPics'); // Ensure this path is correct
        console.log('DestinationPath:', destinationPath);
        cb(null, destinationPath);
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname);
    },
});

const childPicUpload = multer({
    storage: childPicStorage,
    // limits: {
    //     fileSize: 2 * 1024 * 1024, // 2MB in bytes
    // },
}).array('file', 5); // Ensure 'file' matches the key in Postman

const handleChildCartUploadPic = async (req, res) => {
    console.log('success');
    try {
        const { child_name, school_name, address, contact_number,postal_address, standard, division, role, product_id, customer_id } = req.body;
        
        const { files } = req;

        console.log('req.body', req.body);
        console.log('req.files', req.files);

        if (!files || files.length === 0) {
            return res.status(400).send('No files uploaded');
        }

        const filePaths = files.map((file) => file.path);

        // Create the child cart once
        const childCart = {
            child_name,
            school_name,
            address,
            contact_number,
            // child_cart_status: true,
            postal_address,
            standard,
            role,
            division,
            product_id,
            customer_id,
        };
        console.log(childCart)
        const createChildCart = await childForm.create(childCart);

        if (!createChildCart) {
            return res.status(500).send('Failed to create child cart');
        }

        const childFormId = createChildCart.child_form_id;

        const createCartTable = await cartTable.create({
            cart_status: true,
            child_form_id : childFormId,
            customer_id : customer_id,
            product_id: product_id,
            no_of_product: 1,
        })
        if(!createCartTable){
            res.status(404).send('Failed to created')
        }

        // Process and store file paths
        const filePromises = filePaths.map(async (filePath) => {
            const childPic = {
                img_path: filePath,
                child_form_id: childFormId,
            };

            return childImage.create(childPic);
        });

        // Wait for all file paths to be stored
        await Promise.all(filePromises);

        res.status(200).send('Child cart and pics uploaded successfully');
    } catch (error) {
        console.error('Error storing the file paths', error);
        res.status(500).send('Internal server error');
    }
};

module.exports = {
    handleChildCartUploadPic,
    childPicUpload,
};
