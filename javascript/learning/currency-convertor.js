const currencies = {
  USD: 1.0,
  JPY: 113.5,
  EUR: 0.89,
  RUB: 74.36,
  GBP: 0.75,
};

console.log('Welcome to Currency Converter!');

for (const currency in currencies) {
  console.log(`1 USD equals ${currencies[currency]} ${currency}`);
}

console.log("I can convert USD to these currencies: JPY, EUR, RUB, USD, GBP");

let fromCurrency = prompt("Type the currency you wish to convert: ").toUpperCase().trim();
let toCurrency = prompt("To: > ").toUpperCase().trim();
let amount = parseFloat(prompt("Amount: > ").trim());

// Validate currencies
if (!currencies[fromCurrency] || !currencies[toCurrency]) {
  console.log("Unknown currency");
} else if (isNaN(amount)) {
  console.log("The amount has to be a number");
} else {
  // Conversion formula
  let converted = (amount / currencies[fromCurrency]) * currencies[toCurrency];

  console.log(`Result: ${amount} ${fromCurrency} equals ${converted.toFixed(4)} ${toCurrency}`);
}
