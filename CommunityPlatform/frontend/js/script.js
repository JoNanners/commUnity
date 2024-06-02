document.getElementById('signUp').addEventListener('click', () => {
    document.querySelector('.container').classList.add('right-panel-active');
});

document.getElementById('signIn').addEventListener('click', () => {
    document.querySelector('.container').classList.remove('right-panel-active');
});

document.getElementById('loginForm').addEventListener('submit', async (event) => {
    event.preventDefault();

    // Extract the user ID (email) and password from the form
    const email = document.getElementById('userId').value;
    const password = document.getElementById('password').value;

    try {
        // Send a POST request to the server to authenticate the user
        const response = await fetch('/api/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, password })
        });

        // Parse the response
        const data = await response.json();

        // If authentication is successful, redirect the user to the dashboard
        if (response.ok) {
            window.location.href = '/dashboard.html';
        } else {
            // If authentication fails, display an error message
            console.error('Login failed:', data.msg);
        }
    } catch (error) {
        console.error('Login failed:', error);
    }
});
