function convertTemp() {
    const tempInput = document.getElementById('tempInput').value;
    const unitSelect = document.getElementById('unitSelect').value;
  
    if (isNaN(tempInput)) {
      document.getElementById('result').innerHTML = 'Please enter a valid number';
      return;
    }
  
    let result;
    if (unitSelect === 'celsius') {
      result = (tempInput * 9/5) + 32;
      document.getElementById('result').innerHTML = `${tempInput} °C is ${result} °F`;
    } else if (unitSelect === 'fahrenheit') {
      result = (tempInput - 32) * 5/9;
      document.getElementById('result').innerHTML = `${tempInput} °F is ${result} °C`;
    } else if (unitSelect === 'kelvin') {
      result = (tempInput - 273.15) * 9/5 + 32;
      document.getElementById('result').innerHTML = `${tempInput} K is ${result} °F`;
    }
    else {
      document.getElementById('result').innerHTML = 'Invalid unit';
    }
  }
  