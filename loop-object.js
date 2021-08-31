const bottle = {
  color: "Yellow",
  hold: "Water",
  price: 120,
  isCleaned: true,
};
/*
for(let i = 0; i < bottle.length; i++){}
for(const array of arrays){} // recommanded for array
for(const prop in object){} // recommanded for object and return only one value
*/
for (const prop in bottle) {
    // console.log(prop);
}

for (const [prop, value] of Object.entries(bottle)) {
    console.log(prop, value);
}