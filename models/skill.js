const skills = [
  { id: 16546421, name: "Microsoft Office", level: 7 },
  { id: 298464, name: "Javascript", level: 5 },
  { id: 384321, name: "Html", level:5},
  { id: 4216598, name: "Python", level: 3 },
];
module.exports = {
  getAll,
  getOne,
  create,
  deleteOne,
};
function getAll() {
  return skills;
}
function getOne(id){
  id = parseInt(id);
  return skills.find(skill => skill.id === id);
}
function create(skill){
  skill.id = Date.now() %1000000;
  skills.push(skill);
}
function deleteOne(id){
  id = parseInt(id);
  const idx = skills.findIndex(skill => skill.id ===id);
  skills.splice(idx,1);
}