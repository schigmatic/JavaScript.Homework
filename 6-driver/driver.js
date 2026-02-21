const hasLicence = true;
const age = 9;
const isDrunk = false;
const result = hasLicence && !isDrunk && age > 18;
console.log(`${result ? "Может" : "Не может"}`);
