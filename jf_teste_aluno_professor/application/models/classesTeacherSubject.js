module.exports  = (sequelize, DataTypes) =>{
    const ClassesTeacherSubject = sequelize.define('classes_teacher_subject', {
        class_id: {
            primaryKey: true,
            type: DataTypes.UUID
        },
        teacher_subject_id: {
            primaryKey: true,
            type: DataTypes.UUID
        }
    });

    return ClassesTeacherSubject
}
