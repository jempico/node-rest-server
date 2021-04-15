const express = require('express');
const router = express.Router();
const readUser = require('../services/readUser')

router
    .route("/user")
    .get(readUser)

module.exports = router;