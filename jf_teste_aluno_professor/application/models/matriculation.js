module.exports  = (sequelize, DataTypes) =>{
    const Matriculation = sequelize.define('matriculation', {
        class_id: {
            primaryKey: true,
            type: DataTypes.UUID
        },
        student_id: {
            primaryKey: true,
            type: DataTypes.UUID
        }
    });

    return Matriculation
}
