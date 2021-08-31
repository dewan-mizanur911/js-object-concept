const bottle = {
    color: 'Yellow',
    hold: 'Water',
    price: 120,
    isCleaned: true
}

// getting keys
const keys = Object.keys(bottle);
// getting values
const values = Object.values(bottle);
// getting pair of key and value
const pair = Object.entries(bottle);
// deleteing a pair and seal the object and freeze the object
Object.freeze(bottle); // can't change any values of properties
Object.seal(bottle); // can change the value of properties
delete bottle.isCleaned;
console.log(bottle);