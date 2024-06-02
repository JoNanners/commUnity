document.addEventListener('DOMContentLoaded', () => {
    // Toggle between Sign In and Sign Up
    const container = document.getElementById('container');
    const signInButton = document.getElementById('signIn');
    const signUpButton = document.getElementById('signUp');

    if (signInButton && signUpButton) {
        signInButton.addEventListener('click', () => container.classList.remove('right-panel-active'));
        signUpButton.addEventListener('click', () => container.classList.add('right-panel-active'));
    }

    // Handle Sign Up form submission
    const signUpForm = document.getElementById('signUpForm');
    if (signUpForm) {
        signUpForm.addEventListener('submit', function (event) {
            event.preventDefault();
            const formData = new FormData(signUpForm);
            const user = {};
            formData.forEach((value, key) => user[key] = value);
            localStorage.setItem('user', JSON.stringify(user));
            window.location.href = 'profile.html';
        });
    }

    // Handle Login form submission
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            
            const flatNumber = document.getElementById('loginFlatNumber').value;
            const password = document.getElementById('password').value;
            console.log(password);
            const response = await fetch('http://localhost:5000/api/user/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ flatNumber, password })
            });
            
            if (response.ok) {
                const data = await response.json();
                localStorage.setItem('token', data.token);
                alert('Login successful');
                window.location.href = 'profile.html';
            } else {
                const error = await response.json();
                alert(error.msg);
            }
        });
    }

    // Populate Profile page
    const profileName = document.getElementById('profileName');
    const profileAge = document.getElementById('profileAge');
    const profileFlatNum = document.getElementById('profileFlatNum');
    const profileSkills = document.getElementById('profileSkills');
    const profileEmail = document.getElementById('profileEmail');
    if (profileName && profileAge && profileFlatNum && profileSkills && profileEmail) {
        const user = JSON.parse(localStorage.getItem('user'));
        if (user) {
            profileName.textContent = user.name;
            profileAge.textContent = user.age;
            profileFlatNum.textContent = user.flatNum;
            profileSkills.textContent = user.skills;
            profileEmail.textContent = user.email;
        }
    }

    // Handle Logout
    const logoutButton = document.getElementById('logoutButton');
    if (logoutButton) {
        logoutButton.addEventListener('click', () => {
            localStorage.removeItem('user');
            window.location.href = 'index.html';
        });
    }

    // Dashboard functionalities
    const addEventButton = document.getElementById('addEventButton');
    const eventTable = document.getElementById('eventTable');
    if (addEventButton && eventTable) {
        addEventButton.addEventListener('click', () => {
            const row = eventTable.insertRow();
            const dateCell = row.insertCell(0);
            const timeCell = row.insertCell(1);
            const eventCell = row.insertCell(2);
            const actionsCell = row.insertCell(3);
            dateCell.innerHTML = 'New Date';
            timeCell.innerHTML = 'New Time';
            eventCell.innerHTML = 'New Event';
            actionsCell.innerHTML = '<button>Edit</button> <button>Delete</button>';
        });
    }

    const addComplaintButton = document.getElementById('addComplaintButton');
    const complaintTable = document.getElementById('complaintTable');
    if (addComplaintButton && complaintTable) {
        addComplaintButton.addEventListener('click', () => {
            const row = complaintTable.insertRow();
            const dateCell = row.insertCell(0);
            const complaintCell = row.insertCell(1);
            const typeCell = row.insertCell(2);
            const actionsCell = row.insertCell(3);
            dateCell.innerHTML = 'New Date';
            complaintCell.innerHTML = 'New Complaint';
            typeCell.innerHTML = 'New Type';
            actionsCell.innerHTML = '<button>Edit</button> <button>Delete</button>';
        });
    }

    const addDiscussionButton = document.getElementById('addDiscussionButton');
    const discussionTable = document.getElementById('discussionTable');
    if (addDiscussionButton && discussionTable) {
        addDiscussionButton.addEventListener('click', () => {
            const row = discussionTable.insertRow();
            const topicCell = row.insertCell(0);
            const pollCell = row.insertCell(1);
            const actionsCell = row.insertCell(2);
            topicCell.innerHTML = 'New Topic';
            pollCell.innerHTML = 'New Poll';
            actionsCell.innerHTML = '<button>Edit</button> <button>Delete</button>';
        });
    }

    const registerVolunteerButton = document.getElementById('registerVolunteerButton');
    const volunteerTable = document.getElementById('volunteerTable');
    if (registerVolunteerButton && volunteerTable) {
        registerVolunteerButton.addEventListener('click', () => {
            const row = volunteerTable.insertRow();
            const nameCell = row.insertCell(0);
            const skillsCell = row.insertCell(1);
            const actionsCell = row.insertCell(2);
            nameCell.innerHTML = 'New Volunteer';
            skillsCell.innerHTML = 'New Skills';
            actionsCell.innerHTML = '<button>Edit</button> <button>Delete</button>';
        });
    }
});
