const Skill = require("../models/skillsDb");

module.exports = {
    index
  };

function index(req, res) {
    res.render('skills/index', {
      skills: Skill.getAll()
    });
  }


