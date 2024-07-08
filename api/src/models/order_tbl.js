module.exports = (sequelizedb, Sequelize) => {
    const OrderTable = sequelizedb.define('order_tbl', {
        order_id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        customer_id: {
            type: Sequelize.INTEGER,
            allowNull: true,
            references: {
                model: 'customer_login',
                key:'customer_id'
            }
        },
        total_amount: {
            type: Sequelize.INTEGER,
            allowNull: false,
        },
        order_status: {
            type: Sequelize.BOOLEAN,
        },
        shipping_id: {
            type: Sequelize.INTEGER,
            allowNull: true,
            references: {
                model: 'shipping_details',
                key:'shipping_id'
            }
        },
        order_created_date: {
            type: Sequelize.STRING,
            allowNull: false,
            defaultValue: new Date().toISOString() 
        },
        order_updated_date: {
            type: Sequelize.STRING,
            allowNull: false,
            defaultValue: new Date().toISOString()
        },
    }, {
        freezeTableName: true,
        timestamps: false
    })
    return OrderTable
}