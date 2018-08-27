// Code your solution in this file.
function lowerCaseDrivers(drivers) {
  return drivers.map(driver => driver.toLowerCase());
}

function nameToAttributes(array){
  return array.map(el => {
    const splitName = el.split(" ");
    const firstName = splitName[0];
    const lastName = splitName[1];
    return{firstName,lastName}
  }) 
}

function attributesToPhrase(array) {
  return array.map(el => `${el.name} is from ${el.hometown}`)
}
