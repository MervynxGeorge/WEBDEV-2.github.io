function login() {
    // Example login functionality
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;

    if (email === "admin" && password === "password") {
        document.getElementById('login-message').style.display = 'block';
        document.getElementById('login-error').style.display = 'none';
    } else {
        document.getElementById('login-error').style.display = 'block';
        document.getElementById('login-message').style.display = 'none';
    }
}
