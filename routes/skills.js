const express = require("express");
const router = express.Router();
const skillsCtrl = require("../controllers/skills");
// this is for looks for all the skills we have
router.get("/", skillsCtrl.index);
router.get("/new", skillsCtrl.new);
router.get("/:id", skillsCtrl.show);

router.post("/",skillsCtrl.create);
router.delete("/:id", skillsCtrl.delete);

module.exports = router;
