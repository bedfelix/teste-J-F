module.exports  = (sequelize, DataTypes) =>{
    const Student = sequelize.define('student', {
        student_id: {
            primaryKey: true,
            type: DataTypes.UUID
        },
        name: {
            type:DataTypes.STRING
        },
        email: {
            type: DataTypes.STRING
        },
        deletedAt: {
            type: 'TIMESTAMP'
        },
    });

    return Student
}
