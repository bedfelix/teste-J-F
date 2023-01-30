const express = require('express');
const classes = express.Router();
const db = require('../models')
const uuid = require('uuid')

classes.post('/class/registration', async function (req, res, next) {
    const resp = await db.classes.create({
        class_id: uuid.v4(),
        deletedAt: null,
        status: 'active'
    })
    res.json(resp)
})

module.exports = classes;