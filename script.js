function appendValue(val) {
    document.getElementById("display").value += val;
  }
  
  function clearDisplay() {
    document.getElementById("display").value = "";
  }
  
  function calculate() {
    let expression = document.getElementById("display").value;
    try {
      let result = eval(expression);
      document.getElementById("display").value = result;
    } catch (error) {
      document.getElementById("display").value = "Error";
    }
  }
  