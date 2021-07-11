class limon {
  constructor(id, name, dept = null) {
    this.id = id;
    this.name = name;
    this.dept = dept;
  }

  display() {
    console.log(
      `Studen with Id:${this.id} name:${this.name} department:${this.dept} `
    );
  }
}
module.exports.limon = limon;
module.exports.print = function showMe() {
  console.log("welcome to this episodes:");
};
