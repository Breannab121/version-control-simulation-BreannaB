
// Checks if all fields are filled (truthy) and at least one radio button is selected

function checkInputs() {
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    const popoverMessage = document.getElementById('popoverMessage');
    const submitButton = document.getElementById('submitButton');
  
    const allFilled = name && email && message;
  
    if (allFilled) {
      popoverMessage.style.display = 'none';
      submitButton.disabled = false;
    } else {
      popoverMessage.style.display = 'block';
      submitButton.disabled = true;
    }
  }
  
  // Attach listeners
  document.getElementById('name').addEventListener('input', checkInputs);
  document.getElementById('email').addEventListener('input', checkInputs);
  document.getElementById('message').addEventListener('input', checkInputs);
  
  // Submit function
  function submitForm() {
    const form = document.getElementById('contactForm');
    const submitMessage = document.getElementById('submitMessage');
    const submitButton = document.getElementById('submitButton');
  
    // Show confirmation message
    submitMessage.style.display = 'block';
  
    // Optionally clear the form
    form.reset();
  
    // Reset state
    submitButton.disabled = true;
    checkInputs(); // hide popover again if needed
  }