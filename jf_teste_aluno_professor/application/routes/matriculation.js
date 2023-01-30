const express = require('express');
const matriculation = express.Router();
const db = require('../models')

matriculation.post('/matriculation/class/:classId/student/:studentId/registration', async function (req, res, next) {
    const {classId, studentId} = req.params
    const resp = await db.matriculation.create({
        class_id: classId,
        student_id: studentId,
    })
    res.json(resp)
})

module.exports = matriculation;