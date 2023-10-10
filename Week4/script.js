document.addEventListener('DOMContentLoaded', function () {
  debugger;
  const inputText = document.querySelector('.input-text');
  const acButton = document.querySelector('.reset');
  let currentNumber = '';
  let previousNumber = '';
  let currentOperator = '';
  let operatorJustClicked = false;

  const updateDisplay = () => {
    debugger;
	inputText.value = currentNumber;
  };

  const clearData = () => {
    debugger;
	currentNumber = '';
    previousNumber = '';
    currentOperator = '';
    acButton.innerText = 'AC';
  };

  const operate = () => {
    debugger;
	previousNumber = parseFloat(previousNumber);
    currentNumber = parseFloat(currentNumber);

    switch (currentOperator) {
      case '+':
        currentNumber = previousNumber + currentNumber;
        break;
      case '-':
        currentNumber = previousNumber - currentNumber;
        break;
      case '×':
        currentNumber = previousNumber * currentNumber;
        break;
      case '÷':
        currentNumber = previousNumber / currentNumber;
        break;
      case '%':
        currentNumber = previousNumber % currentNumber;
		break;
      default:
        return;
    }
    currentOperator = '';
  };

  document
    .querySelector('.button-wrapper')
    .addEventListener('click', function (e) {
      debugger;
	  const buttonValue = e.target.innerText;
      acButton.innerText = 'C';
      if (e.target.matches('.number')) {
        //reset currentNumber after operator
		if (operatorJustClicked) {
          currentNumber = '';
          operatorJustClicked = false;
        }
        currentNumber += buttonValue;
        updateDisplay();
      } else if (e.target.matches('.operator')||e.target.matches('.modop')) {
        //multi Operator
		if (currentOperator && currentNumber && previousNumber) {
          operate();
          updateDisplay();
          previousNumber = currentNumber;
          currentNumber = '';
        } else if (!previousNumber&&!currentNumber&&buttonValue=='-') {	//unary minus operator
          previousNumber = currentNumber;
          currentNumber = '-';
		  updateDisplay(); 
		  return;
        }
		else if (!previousNumber) {	//if there is no previousNumber
			previousNumber = currentNumber;
			currentNumber = '';
		}
        if (buttonValue === '=') {
          if (previousNumber && currentOperator) {
            operate();
            updateDisplay();
            previousNumber = '';
          }
        } else if (['+', '-', '×', '÷', '%'].includes(buttonValue)) {
          currentOperator = buttonValue;
          //display operator 
		  currentNumber = buttonValue;
          updateDisplay();
          operatorJustClicked = true;
        } else if (buttonValue === '.') {
          if (!currentNumber.includes('.')) {
            currentNumber += '.';
            updateDisplay();
          }
        }
      } else if (e.target.matches('.reset')) {
        clearData();
        updateDisplay();
      }
    });
});
