const express = require('express');
const skill = require('../models/skill');
const router = express.Router();
const skillsCtrl = require('../controllers/skills')

router.get('/', skillsCtrl.index)


module.exports = router;
