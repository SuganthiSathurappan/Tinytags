//create customer login table
module.exports = (sequelizedb, Sequelize) => {
    const CustomerLoginTbl = sequelizedb.define('customer_login', {
        customer_id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        customer_name: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        customer_user_name: {
            type: Sequelize.STRING,
        },
        customer_pswd: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        customer_created_date: {
            type: Sequelize.STRING,
            allowNull: false,
            defaultValue: new Date().toISOString()
        },
        customer_updated_date: {
            type: Sequelize.STRING,
            allowNull: false,
            defaultValue: new Date().toISOString()
        },
    },{
        freezeTableName: true,
        timestamps: false
    })
    return CustomerLoginTbl
}