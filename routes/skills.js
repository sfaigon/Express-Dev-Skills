const express = require('express');
const router = express.Router();
const skillsCtrl = require("../controllers/skills")
// this is for looks for all the skills we have
router.get("/", skillsCtrl.index);


module.exports = router;
