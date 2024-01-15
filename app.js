console.log("Hello world");

function sayHello() {
  console.log("Hello world!");
}

sayHello(); //Output: Hello world!
sayHello(); //Output: Hello world!
sayHello(); //Output: Hello world!

function sayHelloTo(name) {
  console.log("Hello" + name + "!");
}

sayHelloTo(" Bob "); // Output: Hello Bob!
sayHelloTo(" Jimmy "); // Output: Hello Jimmy!
sayHelloTo(" Alice "); // Output: Hello Alice!

function greet(greeting, name) {
  console.log(greeting + "" + name + "!");
}

greet("Good morning", " Bob "); // Output: Good morning Bob!
greet("Buenos dias", "Alice"); // Output: Buenos dias Alice!
greet("Bonjour", " Charlie "); // Output: Bonjour Charlie!

function add(a, b) {
  return a + b;
}
const result = add(1, 5);
console.log("The result is", result); // Output: The result is 6
const anotherResult = add(2, 10);
console.log("Another result is", anotherResult); // Output: Another result is 12

function multiply(a, b) {
  return a * b;
}

function subtract(a, b) {
  return a - b;
}

function divide(a, b) {
  return a / b;
}
function calculate(a, b, operator) {
  if (operator === "+") {
    return add(a, b);
  } else if (operator === "-") {
    return subtract(a, b);
  } else if (operator === "*") {
    return multiply(a, b);
  } else if (operator === "/") {
    return divide(a, b);
  }
}

function calculate(a, b, operator) {
  switch (operator) {
    case "+":
      return add(a, b);
    case "-":
      return subtract(a, b);
    case "*":
      return multiply(a, b);
    case "/":
      return divide(a, b);
  }
}

calculate();
const results = calculate(1, 5, "+");
console.log("The result is", results);

const anotherResults = calculate(2, 10, "*");
console.log("Another result is", anotherResults);
