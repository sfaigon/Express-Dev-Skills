const skills = [
  { id: 16546421, name: "Microsoft Office", level: "7" },
  { id: 298464, name: "Javascript", level: "5" },
  { id: 384321, name: "Html", level: "5" },
  { id: 4216598, name: "Python", level: "3" },
];
module.exports = {
  getAll,
  getOne
};
function getAll() {
  return skills;
}
function getOne(id){
  id = parseInt(id);
  return skills.find(skill => skill.id === id);
}