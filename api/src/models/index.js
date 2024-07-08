//sequelize app
const dbconfig = require('../config/config')
console.log('sequelize with db connect');
const Sequelize = require('sequelize');

//one database
const sequelizedb = new Sequelize(
    dbconfig.DB, dbconfig.USER, dbconfig.PASSWORD, {
    host: dbconfig.HOST,
    port: dbconfig.PORT,
    dialect: dbconfig.dialect,

    pool: {
        max: dbconfig.pool.max,
        min: dbconfig.pool.min,
        acquire: dbconfig.pool.acquire,
        idle: dbconfig.pool.idle
    }
})

sequelizedb.authenticate()
.then(() => {
    console.log('connected...')
})
.catch(err => {
    console.log('Error : '+ err)
})

const db = {}
db.Sequelize = Sequelize
db.sequelize = sequelizedb

db.customerLogin = require('./customer_login_model')(sequelizedb,Sequelize);
db.childForm = require('./child_form_model')(sequelizedb,Sequelize);
db.childImage = require('./child_image_model')(sequelizedb,Sequelize);
db.shippingAddress = require('./shipping_address_model')(sequelizedb,Sequelize);
db.productDetails = require('./product_model')(sequelizedb,Sequelize);
db.cartTable = require('./cart_tbl_model')(sequelizedb,Sequelize);
db.orderTable = require('./order_tbl')(sequelizedb,Sequelize);


db.customerLogin.hasMany(db.childForm, {
    foreignKey : 'customer_id'
})

db.childForm.belongsTo(db.customerLogin, {
    foreignKey : 'customer_id'
})

db.productDetails.hasMany(db.childForm, {
    foreignKey : 'product_id'
})

db.childForm.belongsTo(db.productDetails, {
    foreignKey : 'product_id'
})

db.productDetails.hasMany(db.cartTable, {
    foreignKey : 'product_id'
})

db.cartTable.belongsTo(db.productDetails, {
    foreignKey : 'product_id'
})

db.childForm.hasMany(db.childImage, {
    foreignKey : 'child_form_id'
})

db.childImage.belongsTo(db.childForm, {
    foreignKey : 'child_form_id'
})

db.customerLogin.hasMany(db.shippingAddress,{
    foreignKey : 'customer_id'
})

db.shippingAddress.belongsTo(db.customerLogin, {
    foreignKey : 'customer_id'
})

//childcartTable fk
db.customerLogin.hasMany(db.cartTable,{
    foreignKey : 'customer_id'
})

db.cartTable.belongsTo(db.customerLogin, {
    foreignKey : 'customer_id'
})

db.childForm.hasMany(db.cartTable,{
    foreignKey : 'child_form_id'
})

db.cartTable.belongsTo(db.childForm, {
    foreignKey : 'child_form_id'
})

//ordertable fk
db.customerLogin.hasMany(db.orderTable,{
    foreignKey : 'customer_id'
})

db.orderTable.belongsTo(db.customerLogin, {
    foreignKey : 'customer_id'
})

db.shippingAddress.hasMany(db.orderTable,{
    foreignKey : 'shipping_id'
})

db.orderTable.belongsTo(db.shippingAddress, {
    foreignKey : 'shipping_id'
})


db.sequelize.sync({ force: false})
    .then(() => {
        console.log('Database sync done!')
    })

module.exports = db;