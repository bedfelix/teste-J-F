const express = require('express');
const student = express.Router();
const db = require('../models')
const uuid = require('uuid')

student.post('/student/registration', async function (req, res, next) {
    const {name, email} = req.body
    const resp = await db.student.create({
        student_id: uuid.v4(),
        name: name,
        email: email,
        deletedAt: null,
    })
    res.json(resp)
})

student.put('/student/:studentId/deleted', async function (req, res, next) {
    const {studentId} = req.params
    const resp = await db.student.update(
        { deletedAt: new Date() },
        { where: { student_id: studentId}}
    )
    res.json(resp)
})

student.get('/student/:studentId', async function (req, res, next) {
    const {studentId} = req.params
    const student = await db.student.findOne({where: {student_id: studentId, deletedAt: null}})
    if (!student) {
        res.send('Contato não encontrado!!')
        return next()
    }
    const matriculation = await db.matriculation.findOne({where: {student_id: studentId}})
    const teacherSubjects = await db.sequelize.query( 
        `SELECT t.name as teacher_name, sb.name as subject_name  
        FROM classes_teacher_subjects cts
        JOIN teacher_subjects ts ON ts.id = cts.teacher_subject_id 
        JOIN subjects sb ON sb.subject_id  = ts.subject_id 
        JOIN teachers t ON t.teacher_id  = ts.teacher_id 
        WHERE cts.class_id = '${matriculation.class_id}'`
      )

    res.json({student:{
        name: student.name,
        email: student.email,
        class: {
            id: matriculation.class_id,
            classes: teacherSubjects[1]['rows']
        }
    }})
})
module.exports = student;