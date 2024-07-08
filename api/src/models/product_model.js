module.exports = (sequelizedb, Sequelize) => {
    const ProductTable = sequelizedb.define('product_details', {
        product_id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        product_name: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        product_price: {
            type: Sequelize.INTEGER,
            allowNull: false,
        },
        product_created_date: {
            type: Sequelize.STRING,
            allowNull: false,
            defaultValue: new Date().toISOString() 
        },
        product_updated_date: {
            type: Sequelize.STRING,
            allowNull: false,
            defaultValue: new Date().toISOString()
        },
    }, {
        freezeTableName: true,
        timestamps: false
    })
    return ProductTable
}