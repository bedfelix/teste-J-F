module.exports  = (sequelize, DataTypes) =>{
    const Classes = sequelize.define('classes', {
        class_id: {
            primaryKey: true,
            type: DataTypes.UUID
        },
        deletedAt: {
            type: 'TIMESTAMP'
        },
        status: {
            type: DataTypes.STRING
        }
    });

    return Classes
}
