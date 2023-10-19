const express = require("express");
const router = express.Router();
const skillsCtrl = require("../controllers/skills");
// this is for looks for all the skills we have
router.get("/", skillsCtrl.index);
router.get("/:id", skillsCtrl.show);

module.exports = router;
