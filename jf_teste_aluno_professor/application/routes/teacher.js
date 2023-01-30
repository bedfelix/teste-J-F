const express = require('express');
const teacher = express.Router();
const db = require('../models')
const uuid = require('uuid')

teacher.post('/teacher/registration', async function (req, res, next) {
    const {name} = req.body
    const resp = await db.teacher.create({
        teacher_id: uuid.v4(),
        name: name,
        deletedAt: null,
    })
    res.json(resp)
})

teacher.put('/teacher/:teacherId/deleted', async function (req, res, next) {
    const {teacherId} = req.params
    const resp = await db.teacher.update(
        { deletedAt: new Date() },
        { where: { teacher_id: teacherId}}
    )
    res.json(resp)
})

teacher.get('/teacher/:teacherId', async function (req, res, next) {
    const {teacherId} = req.params
    const teacher = await db.teacher.findOne({ where : {teacher_id: teacherId, deletedAt: null}})
    if (!teacher) {
        res.send('Contato não encontrado!!')
        return next()
    }
    const resp = await db.sequelize.query(
        `SELECT s."name"  
        FROM teacher_subjects ts
        JOIN subjects s ON s.subject_id = ts.subject_id 
        WHERE ts.teacher_id = '${teacherId}'`
      )

    res.json({teacher: teacher.name, subjects: resp[1]['rows']})
})





module.exports = teacher;