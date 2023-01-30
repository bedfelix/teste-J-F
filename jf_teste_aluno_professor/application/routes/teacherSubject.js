const express = require('express');
const teacherSubject = express.Router();
const db = require('../models')
const uuid = require('uuid')

teacherSubject.post('/teacher/:teacherId/subject/:subjectId/registration', async function (req, res, next) {
    const {teacherId, subjectId} = req.params
    const resp = await db.teacherSubject.create({
        id: uuid.v4(),
        teacher_id: teacherId,
        subject_id: subjectId,
    })
    res.json(resp)
})

module.exports = teacherSubject;