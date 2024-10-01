document.addEventListener('DOMContentLoaded', function () {
    // Neon text typing effect
    const text = 'Welcome to My Profile';
    let index = 0;
    const dynamicText = document.getElementById('neonText');

    function typeText() {
        if (index < text.length) {
            dynamicText.innerHTML += text.charAt(index);
            index++;
            setTimeout(typeText, 100); // Adjust the speed of typing
        }
    }

    typeText();
});
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Retrieve the values from the input fields
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    // Check if the credentials are correct
    if (username === 'Mdarif03' && password === 'Mdarif@123') {
        // Redirect to the portfolio page
        window.location.href = 'index.html';
    } else {
        // Display error message
        document.getElementById('errorMessage').textContent = 'Invalid username or password';
    }
});
