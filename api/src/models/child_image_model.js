//create child image table
module.exports = (sequelizedb, Sequelize) => {
    const ChildImageTable = sequelizedb.define('child_image', {
        img_id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        img_path: {
            type: Sequelize.STRING,
        },
        child_form_id: {
            type: Sequelize.INTEGER,
            allowNull: false,
            references: {
                model: 'child_form_tbl',
                key: 'child_form_id'
            }
        },
        child_image_created_date: {
            type: Sequelize.STRING,
            allowNull: false,
            defaultValue: new Date().toISOString()
        },
        child_image_updated_date: {
            type: Sequelize.STRING,
            allowNull: false,
            defaultValue: new Date().toISOString()
        }
    },{
        freezeTableName: true,
        timestamps: false
    })
    return ChildImageTable
}