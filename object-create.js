// using object literal,object declaration
const student = {
    name : 'Sakib al hasan', job : 'cricketer'
}

// object constractor
const person = new Object();

// 
const human = Object.create(student);// vitore dewai lagbe

//  class called as syntractical sugar
class People {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
const peop = new People('manush', 12);

// class like function
function Manush(name) {
    this.name = name;
}
const man = new Manush('jubaer');
console.log(man);