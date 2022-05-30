const resultElement = document.querySelector("#result");
const lengthElement = document.querySelector("#length");
const uppercaseElement = document.querySelector("#uppercase");
const lowercaseElement = document.querySelector("#lowercase");
const numbersElement = document.querySelector("#numbers");
const symbolsElement = document.querySelector("#symbols");
const generateElement = document.querySelector("#generate");
const clipboardElement = document.querySelector("#clipboard");

const randomFunction = {
  upper: getRandomUpper,
  lower: getRandomLower,
  number: getRandomNumber,
  symbol: getRandomSymbol,
};

clipboardElement.addEventListener("click", () => {
  const textarea = document.createElement("textarea");
  const password = resultElement.innerText;

  if (!password) {
    return;
  }

  textarea.value = password;
  document.body.append(textarea);
  textarea.select();
  document.execCommand("copy");
  textarea.remove();
  resultElement.innerText = "";
  alert("Password has been copied to the clipboard!");
});

generateElement.addEventListener("click", () => {
  const length = +lengthElement.value;
  const hasLower = lowercaseElement.checked;
  const hasUpper = uppercaseElement.checked;
  const hasNumbers = numbersElement.checked;
  const hasSymbols = symbolsElement.checked;

  resultElement.innerText = generatePassword(
    hasLower,
    hasUpper,
    hasNumbers,
    hasSymbols,
    length
  );
});

function generatePassword(lower, upper, number, symbol, length) {
  let generatedPassword = "";
  const typesCount = lower + upper + number + symbol;
  const typesArray = [{ lower }, { upper }, { number }, { symbol }].filter(
    (item) => Object.values(item)[0]
  );

  if (typesCount === 0) {
    return "";
  }

  for (let index = 0; index < length; index += typesCount) {
    for (const type of typesArray) {
      const functionName = Object.keys(type)[0];
      generatedPassword += randomFunction[functionName]();
    }
  }

  const finalPassword = generatedPassword.slice(0, length);
  return finalPassword;
}

function getRandomUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function getRandomLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function getRandomNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

function getRandomSymbol() {
  const symbols = "!@#$%^&*(){}=<>/,.";
  return symbols[Math.floor(Math.random() * symbols.length)];
}
