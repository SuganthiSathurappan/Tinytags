// const express = require('express');
// const appRoute = express.Router();
// const checkController = require('../Backend/src/controllers/check/check.controller.js')

// appRoute.use('/healthCheck', (req, res) => {
//     return res.status(200).json({
//         message: 'Success'
//     })
// })

// //upload the child pic and the child_cart
// appRoute.post('/addToCartUploadPic',checkController.handleChildCartUploadPic,checkController.childPicUpload)

// module.exports = appRoute;

const express = require('express');
const appRoute = express.Router();
const childFormController = require('./src/controllers/child_form.controller.js');
const checkController = require('./src/controllers/check.controller.js');

appRoute.use('/healthCheck', (req, res) => {
    return res.status(200).json({
        message: 'Success'
    })
})

//For uploading child image and the cart details
appRoute.post('/addToCartUploadPic', childFormController.childPicUpload, childFormController.handleChildCartUploadPic);

//for getting the cart data
appRoute.post('/customerCart',checkController.handleCartDetails);
appRoute.post('/cartDetails',checkController.handleFetchCart);
appRoute.post('/shippingAddress',checkController.handleShippingDetails);
appRoute.post('/updateCart',checkController.handleNoOfProduct);
appRoute.post('/orderStatus',checkController.handleUpdateOrder);
appRoute.post('/cartProduct',checkController.handleCartProduct);
appRoute.delete('/deleteCart',checkController.handleDeleteCart)


module.exports = appRoute;
