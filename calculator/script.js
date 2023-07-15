function appendToDisplay(value) {
    document.getElementById('display').value += value;
  }
  
  function calculate() {
    const displayValue = document.getElementById('display').value;
    const result = eval(displayValue);
  
    document.getElementById('display').value = result;
  }
  
  function clearDisplay() {
    document.getElementById('display').value = '';
  }
  