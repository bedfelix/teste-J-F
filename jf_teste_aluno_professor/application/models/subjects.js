module.exports  = (sequelize, DataTypes) =>{
    const Subjects = sequelize.define('subjects', {
        subject_id: {
            primaryKey: true,
            type: DataTypes.UUID
        },
        name: {
            type:DataTypes.STRING
        },
        deletedAt: {
            type: 'TIMESTAMP'
        },
    });

    return Subjects
}
