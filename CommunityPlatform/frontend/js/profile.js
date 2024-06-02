// profile.js

document.addEventListener("DOMContentLoaded", function () {
    // Get user details from local storage
    const user = JSON.parse(localStorage.getItem("user"));

    // Populate profile details
    if (user) {
        document.getElementById("name").value = user.name || "";
        // document.getElementById("age").value = user.age || "";
        document.getElementById("flat-no").value = user.flatNo || "";
        document.getElementById("phone-number").value = user.phoneNumber || "";
        document.getElementById("profession").value = user.profession || "";
        document.getElementById("email").value = user.email || "";
    }

    // Save profile details to local storage
    document.getElementById("profile-form").addEventListener("submit", function (event) {
        event.preventDefault();
        
        const updatedUser = {
            name: document.getElementById("name").value,
            // age: document.getElementById("age").value,
            flatNo: document.getElementById("flat-no").value,
            phoneNumber: document.getElementById("phone-number").value,
            profession: document.getElementById("profession").value,
            email: document.getElementById("email").value
        };

        localStorage.setItem("user", JSON.stringify(updatedUser));
        alert("Profile saved successfully!");
    });

    // Save volunteer details to local storage
    document.getElementById("volunteer-form").addEventListener("submit", function (event) {
        event.preventDefault();
        
        const volunteerDetails = {
            skills: document.getElementById("skills").value,
            hoursAvailable: document.getElementById("hours-available").value
        };

        localStorage.setItem("volunteer", JSON.stringify(volunteerDetails));
        alert("Volunteer registered successfully!");
    });
});