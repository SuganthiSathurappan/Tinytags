//create shipping address table
module.exports = (sequelizedb, Sequelize) => {
    const ShippingAddressTable = sequelizedb.define('shipping_details',{
        shipping_id : {
            type : Sequelize.INTEGER,
            primaryKey : true,
            autoIncrement : true,
            allowNull : false,
        },
        contact_person_name : {
            type : Sequelize.STRING,
        },
        contact_whatsapp_no : {
            type : Sequelize.INTEGER,
        },
        delivery_no : {
            type : Sequelize.INTEGER,
        },
        house_no : {
            type : Sequelize.INTEGER,
        },
        street : {
            type : Sequelize.STRING,
        },
        landmark : {
            type : Sequelize.STRING,
        },
        city : {
            type : Sequelize.STRING
        },
        state : {
            type : Sequelize.STRING,
        },
        pincode : {
            type : Sequelize.INTEGER,
        }, 
        email : {
            type : Sequelize.STRING,
        },
        customer_id: {
            type: Sequelize.INTEGER,
            allowNull: true,
            references: {
                model: 'customer_login',
                key:'customer_id'
            }
        },
        shipping_created_date: {
            type: Sequelize.STRING,
            allowNull: false,
            defaultValue: new Date().toISOString()
        },
        shipping_updated_date: {
            type: Sequelize.STRING,
            allowNull: false,
            defaultValue: new Date().toISOString()
        }
    }, {
        freezeTableName :  true,
        timestamps : false
    })
    return ShippingAddressTable
}