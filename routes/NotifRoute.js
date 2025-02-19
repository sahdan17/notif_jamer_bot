const express = require('express')
const { getHistory } = require('../controllers/NotifController')

const router = express.Router()

router.post('/histOnOff', getHistory)

module.exports = router
