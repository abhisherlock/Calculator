var currentExpression = "";

function appendNumber(number) {
  currentExpression += number;
  document.getElementById("result").value = currentExpression;
}

function appendOperator(operator) {
  currentExpression += " " + operator + " ";
  document.getElementById("result").value = currentExpression;
}

function calculate() {
  try {
    var sanitizedExpression = currentExpression.replace(/[^-()\d/*+.]/g, '');
    var result = eval(sanitizedExpression);
    
    if (result !== undefined && result !== null && !isNaN(result)) {
      document.getElementById("result").value = result;
      currentExpression = result.toString();
    } else {
      throw new Error("Invalid expression");
    }
  } catch (error) {
    document.getElementById("result").value = "Error";
    currentExpression = "";
  }
}

function clearDisplay() {
  currentExpression = "";
  document.getElementById("result").value = "";
}

