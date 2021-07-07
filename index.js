// Code your solution in this file.
const lowerCaseDrivers = drivers => drivers.map(d=>d.toLowerCase());
const nameToAttributes = drivers => drivers.map(d=>(s=>({firstName: s[0], lastName: s[1]}))(d.split(" ")));
const attributesToPhrase = drivers => drivers.map(d=>`${d.name} is from ${d.hometown}`);