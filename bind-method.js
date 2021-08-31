const student = {
  id: 201,
  name: "Golam kibria",
  amount: 5000,
  treatDey: function (treat) {
    this.amount = this.amount - treat;
    return this.amount;
  }
};
const golam = {
    id: 202,
    name: "Golam Rabbani",
    amount: 8000
}
const golamTreatDey = student.treatDey.bind(golam);
const availMoney = golamTreatDey(500);
console.log(availMoney);