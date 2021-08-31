const obj1 = { a: 1, b: 2 };
const obj2 = { b: 1, a: 2 };
if (obj1 === obj2) {
    // console.log('same');
}
else {
    // console.log('different');
}

function compareObjects(obj1, obj2) {
    if (Object.keys(obj1).length !== Object.keys(obj2).length) {
        return false;
    }
    for (const prop in obj1) {
        if (obj1[prop] !== obj2[prop]) {
            return false
        }
    }
    return 'equal';
 }
const result = compareObjects(obj1, obj2);
console.log(result);