const express = require('express');

const app = express();
app.use(express.json());

app.use('', require('./routes/classes'))
app.use('', require('./routes/classesTeacherSubject'))
app.use('', require('./routes/student'))
app.use('', require('./routes/subject'))
app.use('', require('./routes/teacher'))
app.use('', require('./routes/teacherSubject'))
app.use('', require('./routes/matriculation'))

module.exports = app;