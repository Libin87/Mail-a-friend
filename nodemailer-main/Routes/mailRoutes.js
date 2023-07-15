const express = require('express')
const { mailAFriend } = require('../controller/mailController')
const router = express.Router()
router.route("/create").post(mailAFriend);

module.exports = router