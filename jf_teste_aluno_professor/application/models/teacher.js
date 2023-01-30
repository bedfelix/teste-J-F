module.exports  = (sequelize, DataTypes) =>{
    const Teacher = sequelize.define('teacher', {
        teacher_id: {
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

    return Teacher
}
