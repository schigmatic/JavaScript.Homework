function convertCurrency(amount, fromCurrency, toCurrency) {
  const rates = {
    руб: 0.013,
    $: 1,
    "€": 1.1,
  };

  if (!rates[fromCurrency] || !rates[toCurrency]) {
    return null;
  }

  const amountInUSD = amount * rates[fromCurrency];
  const convertedAmount = amountInUSD / rates[toCurrency];

  return convertedAmount;
}

// Примеры
console.log(convertCurrency(1000, "руб", "$"));
console.log(convertCurrency(100, "$", "руб"));
console.log(convertCurrency(50, "руб", "€"));
console.log(convertCurrency(100, "руб", "₿"));
