const { DataTypes } = require('sequelize');
const sequelize = require('../config/sequelize');

const Classes = require('./classes')
const ClassesTeacherSubject = require('./classesTeacherSubject')
const Matriculation = require('./matriculation')
const Student = require('./student')
const Subjects = require('./subjects')
const Teacher = require('./teacher')
const TeacherSubject = require('./teacherSubject')

const classes = Classes(sequelize, DataTypes)
const classesTeacherSubject = ClassesTeacherSubject(sequelize, DataTypes)
const matriculation = Matriculation(sequelize, DataTypes)
const student = Student(sequelize, DataTypes)
const subjects = Subjects(sequelize, DataTypes)
const teacher = Teacher(sequelize, DataTypes)
const teacherSubject = TeacherSubject(sequelize, DataTypes)

const db = {
    classes,
    classesTeacherSubject,
    matriculation,
    student,
    subjects,
    teacher,
    teacherSubject,
    sequelize
}

module.exports = db;