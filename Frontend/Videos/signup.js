// Function to handle the sign-up process
function signUp() {
    // Get the input field values
    const firstName = document.getElementById('signup-firstname').value;
    const lastName = document.getElementById('signup-lastname').value;
    const email = document.getElementById('signup-email').value;
    const password = document.getElementById('signup-password').value;

    // Get the message elements
    const successMessage = document.getElementById('signup-message');
    const errorMessage = document.getElementById('signup-error');

    // Reset any previous messages
    successMessage.style.display = 'none';
    errorMessage.style.display = 'none';

    // Basic form validation
    if (!firstName || !lastName || !email || !password) {
        // If any field is empty, display an error
        errorMessage.style.display = 'block';
        errorMessage.textContent = 'Please fill in all the fields.';
        return;
    }

    // Optional: Add regex validation for email and password here (for example, ensuring a valid email format)

    // If all fields are valid, show success message
    successMessage.style.display = 'block';
    successMessage.textContent = 'Sign-Up Successful!';

    // You can add more functionality here, like sending data to a server, etc.
}
