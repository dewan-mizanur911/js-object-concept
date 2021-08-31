const student = {
    id: 201,
    name: 'Golam kibria',
    amount: 5000,
    exam: function () {
        console.log(this.name, 'attending exam');
    },
    treatDey: function (treat, boksis) {
        this.amount = this.amount - treat - boksis;
        return this.amount;
    }
}
const remaining1 = student.treatDey(900, 100);
const remaining2 = student.treatDey(500, 50);
console.log(remaining2);