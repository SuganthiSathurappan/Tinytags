//create child cart details table
module.exports = (sequelizedb, Sequelize) => {
    const ChildFormTable = sequelizedb.define('child_form_tbl',{
        child_form_id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        child_name: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        school_name: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        address: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        contact_number: {
            type: Sequelize.INTEGER,
            allowNull: false,
        },
        postal_address: {
            type: Sequelize.STRING,
            allowNull: true,
        },
        standard: {
            type: Sequelize.INTEGER,
            allowNull: true,
        },
        division: {
            type: Sequelize.STRING,
            allowNull: true,
        },
        role: {
            type: Sequelize.INTEGER,
            allowNull: true,
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
            allowNull: true,
            references: {
                model: 'product_details',
                key: 'product_id'
            }
        },
        child_form_created_date: {
            type: Sequelize.STRING,
            allowNull: false,
            defaultValue: new Date().toISOString()
        },
        child_form_updated_date: {
            type: Sequelize.STRING,
            allowNull: false,
            defaultValue: new Date().toISOString()
        }
    },{
        freezeTableName: true,
        timestamps: false
    })
    return ChildFormTable
}