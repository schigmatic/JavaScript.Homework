function validateCard(number) {
  const digits = number.replace(/[-\s]/g, "");
  let sum = 0;
  let doubleDigit = false;
  for (let i = digits.length - 1; i >= 0; i--) {
    let digit = parseInt(digits[i], 10);

    if (doubleDigit) {
      digit *= 2;
      if (digit > 9) digit -= 9;
    }
    sum += digit;
    doubleDigit = !doubleDigit;
  }
  return sum % 10 === 0;
}
const cardNumber = "4561-2612-1234-5464";
console.log(validateCard(cardNumber));
