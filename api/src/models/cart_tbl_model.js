module.exports = (sequelizedb, Sequelize) => {
    const CartTable = sequelizedb.define('cart_tbl', {
        cart_id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        cart_status: {
            type: Sequelize.BOOLEAN,
        },
        no_of_product: {
            type: Sequelize.INTEGER,
            allowNull: true,
        },
        cart_amount: {
            type: Sequelize.INTEGER,
            allowNull: true,
        },
        child_form_id: {
            type: Sequelize.INTEGER,
            allowNull: true,
            references: {
                model: 'child_form_tbl',
                key:'child_form_id'
            }
        },
        customer_id: {
            type: Sequelize.INTEGER,
            allowNull: true,
            references: {
                model: 'customer_login',
                key:'customer_id'
            }
        },
        product_id: {
            type: Sequelize.INTEGER,
            allowNull: false,
            references: {
                model: 'product_details',
                key:'product_id',
            }
        },
        cart_created_date: {
            type: Sequelize.STRING,
            allowNull: false,
            defaultValue: new Date().toISOString() 
        },
        cart_updated_date: {
            type: Sequelize.STRING,
            allowNull: false,
            defaultValue: new Date().toISOString()
        },
    }, {
        freezeTableName: true,
        timestamps: false
    })
    return CartTable
}