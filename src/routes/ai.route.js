const aicontroller = require('../controllers/ai.controller')
const express = require('express');
const router = express.Router();


router.post('/get-review', aicontroller.getReview)


module.exports = router