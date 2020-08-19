const express = require('express');
const skill = require('../models/skill');
const router = express.Router();
const skillsCtrl = require('../controllers/skills');
const skills = require('../controllers/skills');

router.get('/', skillsCtrl.index);
router.get('/new', skillsCtrl.new)
router.get('/:id', skillsCtrl.show);
router.post('/', skillsCtrl.create);
router.delete('/:id', skillsCtrl.delete);
router.put('/:id', skillsCtrl.update)

module.exports = router;
