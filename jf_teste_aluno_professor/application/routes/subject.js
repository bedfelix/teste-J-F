const express = require('express');
const subject = express.Router();
const db = require('../models')
const uuid = require('uuid')

subject.post('/subject/registration', async function (req, res, next) {
    const {name} = req.body
    const resp = await db.subjects.create({
        subject_id: uuid.v4(),
        name: name,
        deletedAt: null
    })
    res.json(resp)
})

module.exports = subject;