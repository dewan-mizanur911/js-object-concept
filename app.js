const student = {
  id: 201,
  name: "Golam kibria",
    amount: 5000,
    treatDeyArrow: () => {
      console.log(this);
    },
    treatDeyArrowInside: function () {
        const arr = () => console.log(this);
    },
  treatDey: function (treat) {
    this.amount = this.amount - treat;
    return this.amount;
  }
};
