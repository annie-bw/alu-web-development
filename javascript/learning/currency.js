const form = document.getElementById('currencyForm');
const fromCurrency = document.getElementById('fromCurrency');
const toCurrency = document.getElementById('toCurrency');
const amount = document.getElementById('amount');
const converted = document.getElementById('converted');



const currencies = {
  USD: 1.0,
  JPY: 113.5,
  EUR: 0.89,
  RUB: 74.36,
  GBP: 0.75,
};

// Function to check if currency is valid
function isValidCurrency(currency) {
  return currencies.hasOwnProperty(currency);
}

// Function to convert currency
function convertCurrency(amount, fromCurrency, toCurrency) {
  return (amount / currencies[fromCurrency]) * currencies[toCurrency];
}

// Listen for form submission
form.addEventListener('submit', (e) => {
  e.preventDefault();

  const from = fromCurrency.value.trim().toUpperCase();
  const to = toCurrency.value.trim().toUpperCase();
  const amt = parseFloat(amount.value.trim());

  if (!isValidCurrency(from) || !isValidCurrency(to)) {
    alert("Unknown currency");
    return;
  }

  if (isNaN(amt)) {
    alert("The amount has to be a number");
    return;
  }

  const convertedAmount = convertCurrency(amt, from, to);
  converted.value = convertedAmount.toFixed(2);
});
