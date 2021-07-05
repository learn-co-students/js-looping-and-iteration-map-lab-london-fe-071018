// Code your solution in this file.

function lowerCaseDrivers (drivers) {
  return drivers.map (function (driverName) {
    return driverName.toLowerCase()
  })
}

function nameToAttributes(drivers) {
  return drivers.map(function (driverName) {
    const firstName = driverName.split (" ") [0];
    const lastName = driverName.split (" ") [1];
    return {firstName,lastName}
  })
}
 function attributesToPhrase(drivers) {
  return drivers.map(function (driver) {
    return `${driver.name} is from ${driver.hometown}`;
})
}

