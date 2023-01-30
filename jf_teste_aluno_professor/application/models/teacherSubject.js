module.exports  = (sequelize, DataTypes) =>{
    const TeacherSubject = sequelize.define('teacher_subject', {
        id: {
            primaryKey: true,
            type: DataTypes.UUID
        },
        teacher_id: {
            primaryKey: true,
            type: DataTypes.UUID
        },
        subject_id: {
            primaryKey: true,
            type: DataTypes.UUID
        }
    });

    return TeacherSubject
}
