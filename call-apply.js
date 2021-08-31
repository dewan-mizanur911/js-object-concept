const student = {
  id: 201,
  name: "Golam kibria",
  amount: 5000,
  treatDey: function (treat, boksis = 0, tax = 50) {
      this.amount = this.amount - treat - boksis - tax;
      console.log(this);
    return this.amount;
  },
};
const golam = {
  id: 202,
  name: "Golam Rabbani",
  amount: 8000,
};
const golamTreatDey = student.treatDey.bind(golam);
const availMoney = golamTreatDey(500);


// call method
const availMoney2 = student.treatDey.call(golam, 500, 80, 75);


// apply method 
const availMoney3 = student.treatDey.apply(golam, [500, 80, 75]);
