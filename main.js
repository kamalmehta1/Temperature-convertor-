// Add your JavaScript code here
window.addEventListener('DOMContentLoaded', function() {
  // Get references to the input elements
  const celsiusInput = document.getElementById('celsius');
  const fahrenheitInput = document.getElementById('fahrenheit');
  const kelvinInput = document.getElementById('kelvin');

  // Add event listeners to the input elements
  celsiusInput.addEventListener('input', handleCelsiusInput);
  fahrenheitInput.addEventListener('input', handleFahrenheitInput);
  kelvinInput.addEventListener('input', handleKelvinInput);

  function handleCelsiusInput() {
    const celsiusValue = parseFloat(celsiusInput.value);

    // Check if the entered value is a number
    if (!isNaN(celsiusValue)) {
      const fahrenheitValue = (celsiusValue * 9/5) + 32;
      const kelvinValue = celsiusValue + 273.15;
  
      // Update the other input fields with converted values
      fahrenheitInput.value = fahrenheitValue.toFixed(2);
      kelvinInput.value = kelvinValue.toFixed(2);
    } else {
      // Clear the other input fields if the entered value is not a number
      fahrenheitInput.value = '';
      kelvinInput.value = '';
    }
  }

  function handleFahrenheitInput() {
    const fahrenheitValue = parseFloat(fahrenheitInput.value);

    // Check if the entered value is a number
    if (!isNaN(fahrenheitValue)) {
      const celsiusValue = (fahrenheitValue - 32) * 5/9;
      const kelvinValue = (fahrenheitValue + 459.67) * 5/9;
  
      // Update the other input fields with converted values
      celsiusInput.value = celsiusValue.toFixed(2);
      kelvinInput.value = kelvinValue.toFixed(2);
    } else {
      // Clear the other input fields if the entered value is not a number
      celsiusInput.value = '';
      kelvinInput.value = '';
    }
  }

  function handleKelvinInput() {
    const kelvinValue = parseFloat(kelvinInput.value);

    // Check if the entered value is a number
    if (!isNaN(kelvinValue)) {
      const celsiusValue = kelvinValue - 273.15;
      const fahrenheitValue = (kelvinValue * 9/5) - 459.67;
  
      // Update the other input fields with converted values
      celsiusInput.value = celsiusValue.toFixed(2);
      fahrenheitInput.value = fahrenheitValue.toFixed(2);
    } else {
      // Clear the other input fields if the entered value is not a number
      celsiusInput.value = '';
      fahrenheitInput.value = '';
    }
  }
});
