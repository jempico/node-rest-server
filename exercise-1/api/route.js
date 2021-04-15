const express = require('express');
const router = express.Router();
const readUser = require('../services/readUser')

router
    .route("/:name")
    .get(readUser)

module.exports = router;