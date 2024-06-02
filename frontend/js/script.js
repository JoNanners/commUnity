// script.js
document.getElementById('signUp').addEventListener('click', () => {
    document.querySelector('.container').classList.add('right-panel-active');
});

document.getElementById('signIn').addEventListener('click', () => {
    document.querySelector('.container').classList.remove('right-panel-active');
});

document.getElementById('loginBtn').addEventListener('click', async (event) => {
    event.preventDefault();
    const form = document.getElementById('loginForm');
    const formData = new FormData(form);
    const userCredentials = {
        userId: formData.get('userId'),
        password: formData.get('password')
    };

    try {
        const response = await fetch('http://localhost:5000/api/users/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userCredentials)
        });

        if (!response.ok) {
            throw new Error('Login failed. Please check your credentials and try again.');
        }

        const data = await response.json();
        localStorage.setItem('token', data.token);
        window.location.href = 'dashboard.html';
    } catch (error) {
        alert(error.message);
    }
});

document.getElementById('signupBtn').addEventListener('click', async (event) => {
    event.preventDefault();
    const form = document.getElementById('signupForm');
    const formData = new FormData(form);
    const newUser = {
        name: formData.get('name'),
        age: formData.get('age'),
        flatNumber: formData.get('flatNumber'),
        phoneNumber: formData.get('phoneNumber'),
        profession: formData.get('profession'),
        email: formData.get('email'),
        password: formData.get('password')
    };

    try {
        const response = await fetch('http://localhost:5000/api/users/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newUser)
        });

        if (!response.ok) {
            throw new Error('Registration failed. Please try again.');
        }

        alert('Registration successful. You can now log in.');
        document.getElementById('signIn').click(); // Switch to sign-in panel after successful registration
    } catch (error) {
        alert(error.message);
    }
});
