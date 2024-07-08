const db = require('../models/index.js');

const handleCartDetails = async(req, res) => {
    console.log('check');
    try {
        const {customer_id} = req.body;
        console.log('customer_id',customer_id);
        const customerCart = await db.cartTable.findAll({
            where : {
                customer_id : customer_id,
                cart_status : true,
            },
            attributes:['cart_id','customer_id',"product_id",'no_of_product'],
                include: [
                    {
                        model: db.productDetails,
                        attributes: ["product_name","product_price"]
                    }
                    ]
               
        },
    );
    if(!customerCart) {
        console.error('customer cart not found',)
        return res.status(404).send('customer cart is not found')
    }
    const transformedData = customerCart.map(item => ({
        cart_id : item.cart_id,
        customer_id: item.customer_id,
        product_id: item.product_id,
        no_of_product : item.no_of_product,
        product_name: item.product_detail.product_name,
        product_price: item.product_detail.product_price,
    }))
    console.log(customerCart);
    res.send(transformedData );
    // res.send(customerCart);
    // if(customerCart) {
    //     const productId = customerCart.product_id;
    //     const productPrices = await 
    // }
        
    } catch (error) {
        console.log(error)
        res.status(500).send('Internal server error');
    }
};

const handleShippingDetails = async(req, res) => {
    console.log('check');
    try {
        const { contact_person_name, contact_whatsapp_no, house_no,
             street, landmark, city,state, pincode, email, customer_id} = req.body;
             console.log('req.body',req.body);
        
        const createShipppingAdrs = await db.shippingAddress.create({
                contact_person_name: contact_person_name,
                contact_whatsapp_no : contact_whatsapp_no,
                delivery_no : contact_whatsapp_no,
                house_no : house_no,
                street : street,
                landmark : landmark,
                city : city,
                state : state,  
                pincode : pincode,
                email : email,
                customer_id : customer_id
        });
        if(!createShipppingAdrs) {
            return res.send('Failed to send')
        }
        res.send(createShipppingAdrs);
        console.log('shipping address created successfully')
    } catch(error) {
        console.log(error);
        res.status(500).send('Internal server error');
    }
}

const handleNoOfProduct = async(req,res) => {
    console.log('check');
    try{
        const transformedData  = req.body;
        console.log(transformedData);
        for (const item of transformedData) {
            const { cart_id, no_of_product, price } = item;

            const [updatedRows] = await db.cartTable.update(
                {
                    no_of_product: no_of_product,
                    cart_amount: price,
                }, {
                    where: {
                        cart_id: cart_id,
                    }
                },
                
            );
            if(updatedRows === 0) {
                return res.status(400).send('Failed to updated')
            }
            console.log(`Updated cart with cart_id ${cart_id}.`);
            // const customerCart = await db.cartTable.findOne({
            //     where:{
            //         cart_id: cart_id,
            //         cart_status: true,
            //     },
            //     attributes:["cart_id","no_of_product","cart_amount"]
            // });
            // if (!customerCart) {
            //     return res.status(404).send('cart not found');
            // }
        }
        res.send('Updated successfully');
        
        // const customerCartTable = await db.cartTable.findAll({
        //     where: {
        //         cart_id: cart_id
        //     },
        //     attributes:["cart_id","customer_id","cart_amount"]
        // }) 
        // if(customerCartQuantity) {
        //     const orderTable = await  
        // }
          
    } catch(error) {
        console.log(error);
        res.status(500).send('Internal server error')
    }
};

const handleCartProduct = async (req, res) => {
    console.log('check')
    try {
        const { customer_id } = req.body;
        const getCartProduct = await db.cartTable.findAll({
            where:{
                customer_id : customer_id,
                cart_status : true,
            },
            attributes: ["cart_id","no_of_product","cart_amount"]
        });
        console.log(getCartProduct);
        if(!getCartProduct){
            return res.status(404).send('Failed to fetch')
        }
        res.status(200).send(getCartProduct);
        // if (!getCartProduct || getCartProduct.length === 0) {
        //     return res.status(400).send('Failed fetch the data')
        // }
        // res.status(200).send('getCartProduct',getCartProduct);
        // console.log(getCartProduct);
    } catch (error){
        console.log(error);
        res.status(500).send('Internal server error');
    }
}

const handleUpdateOrder = async(req,res) => {
    try{
    const { customer_id } = req.body;
    const cartDetails = await db.cartTable.findAll({
        where: {
            customer_id: customer_id,
            cart_status: true,
        },
        attributes:["cart_id","customer_id","cart_amount"],
        include:[
            {
                model: db.customerLogin,
                attributes: ["customer_id"],
                include: [
                    {
                        model: db.shippingAddress,
                        attributes: ["shipping_id","customer_id"]
                    }
                ],
            }
        ],
    });
    if (!cartDetails || cartDetails.length === 0) {
        return res.status(404).send("Failed to find cart details");
    }
    console.log(cartDetails);
    // res.send(cartDetails);
    const formattedData = cartDetails.map(item => ({
        cart_id: item.cart_id,
        customer_id: item.customer_id,
        cart_amount: item.cart_amount,
        shipping_id: item.customer_login.shipping_details[0]?.shipping_id
    }))
    // res.send(formattedData);
    const combinedData = Object.values(formattedData.reduce((acc, item) => {
        if (!acc[item.customer_id]) {
            acc[item.customer_id] = { 
                customer_id: item.customer_id,
                cart_amount: 0,
                shipping_id: item.shipping_id
            };
        }
        acc[item.customer_id].cart_amount += item.cart_amount;
        return acc;
    }, {}));
    
    console.log(combinedData);
    for (const customer of combinedData) {
    const AddingOrderTable = await db.orderTable.create({
        customer_id: combinedData.customer_id,
        total_amount: combinedData.cart_amount,
        shipping_id: combinedData.shipping_id,
        order_status : true,
    })
    console.log(AddingOrderTable);
    }
    res.send(AddingOrderTable);
} catch (error) {
    console.log(error);
    res.status(500).send('Internal server error')
}
}

//Delete the cartData
const handleDeleteCart = async (req,res) => {
    console.log('Deleted the cart');
    const {cartId} = req.body;
    console.log(cartId);
    if(!cartId) {
        console.log('Invalid input');
        return res.status(400).send({error:"Invalid input"});
    }
    try {
        const deletedRows = await db.cartTable.destroy({
            where: {
                cart_id : cartId
            },
        });
        if(deletedRows > 0) {
            console.log('Deleted the tags')
            return res.send({msg:'Deleted the course',deletedRows});
        } else {
            console.log(`Course with ID ${cartId} not found`);
            return res.status(404).send({error:'Cart_id not found'})
        }
    } catch (error) {
        console.log('error',error);
        res.status(500).send({error:'Failed to delete the cart_id'})
    }
}

const handleFetchCart = async(req, res) => {
    const {customer_id} = req.body;
    try {
        const cartDetails = await db.cartTable.findAll({
            where: {
                customer_id : customer_id,
                cart_status : true,
            },
            attributes: ['cart_id','no_of_product','cart_amount','product_id'],
            include : [
                {
                    model : db.productDetails,
                    attributes : ['product_name']
                }
            ]
        });
        if(!cartDetails || cartDetails === 0) {
            return res.status(404).send('Failed to find cart details');
        }
        console.log(cartDetails);
        const formattedData = cartDetails.map(item => ({
            cart_id : item.cart_id,
            no_of_product : item.no_of_product,
            cart_amount : item.cart_amount,
            product_id : item.product_id,
            product_name : item.product_detail.product_name
        }));
        console.log(formattedData)
        res.send(formattedData)

    } catch(error) {
        console.log(error);
        res.status(500).send('Internal server error') 
    }
}

module.exports = {
    handleCartDetails,
    handleShippingDetails,
    handleNoOfProduct,
    handleUpdateOrder,
    handleCartProduct,
    handleDeleteCart,
    handleFetchCart,
}