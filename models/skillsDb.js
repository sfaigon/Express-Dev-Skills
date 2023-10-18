const skills = [
  { id: 1, name: "Microsoft Office", level: "7" },
  { id: 2, name: "Javascript", level: "5" },
  { id: 3, name: "Html", level: "5" },
  { id: 4, name: "Python", level: "3" },
];
module.exports = {
  getAll,
};

function getAll() {
  return skills;
}
