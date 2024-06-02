// change-password.js

document.addEventListener("DOMContentLoaded", function () {
    // Handle form submission
    document.getElementById("changePasswordForm").addEventListener("submit", function (e) {
        e.preventDefault();
        
        // Get form input values
        const currentPassword = document.getElementById("current-password").value;
        const newPassword = document.getElementById("new-password").value;
        const confirmPassword = document.getElementById("confirm-password").value;

        // Check if new password and confirm password match
        if (newPassword !== confirmPassword) {
            alert("New password and confirm password do not match.");
            return;
        }


        alert("Password changed successfully!");
        
        // Clear form fields
        document.getElementById("current-password").value = "";
        document.getElementById("new-password").value = "";
        document.getElementById("confirm-password").value = "";
    });
});
