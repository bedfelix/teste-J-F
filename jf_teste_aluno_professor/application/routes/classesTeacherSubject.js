const express = require('express');
const classesTeacherSubject = express.Router();
const db = require('../models')
const rabbit = require('../utils/rabbitmq')

classesTeacherSubject.post('/class/:classId/teacherSubject/:teacherSubjectId/registration', async function (req, res, next) {
    const {classId, teacherSubjectId} = req.params
    const resp = await db.classesTeacherSubject.create({
        class_id: classId,
        teacher_subject_id: teacherSubjectId,
    })
    const subjectTeacher = await db.sequelize.query(
        `select t."name" as teacher_name, s."name" as subject_name from teacher_subjects ts 
        join teachers t on t.teacher_id = ts.teacher_id 
        join subjects s on s.subject_id = ts.subject_id 
        where ts.id = '${teacherSubjectId}'`
    )
    const student = await db.sequelize.query(
        `select s."name", s.email from matriculations m 
        join students s on m.student_id  = s.student_id 
        where class_id  = '${classId}'`
    )

    if (student.length > 0) {
        await rabbit.publishMessage({
           subjectTeacher: subjectTeacher[0],
           student: student[0] 
        }, 'enviar_email_teste')
    }
    res.json(resp)
})

module.exports = classesTeacherSubject;