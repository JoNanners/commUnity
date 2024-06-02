// edit-profile.js

document.addEventListener("DOMContentLoaded", function () {
    // Get user details from local storage
    const user = JSON.parse(localStorage.getItem("user"));

    // Populate edit profile form with existing user details
    if (user) {
        document.getElementById("edit-name").value = user.name;
        document.getElementById("edit-age").value = user.age;
        document.getElementById("edit-flat-no").value = user.flatNo;
        document.getElementById("edit-phone-number").value = user.phoneNumber;
        document.getElementById("edit-profession").value = user.profession;
        document.getElementById("edit-email").value = user.email;

        // Set profile photo preview
        const profilePhotoPreview = document.getElementById("edit-profile-photo-preview");
        const profilePhoto = localStorage.getItem("profilePhoto") || "default-profile-photo.png";
        profilePhotoPreview.src = profilePhoto;
    }

    // Handle profile photo change
    document.getElementById("edit-profile-photo").addEventListener("change", function () {
        const file = this.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function (e) {
                const profilePhotoPreview = document.getElementById("edit-profile-photo-preview");
                profilePhotoPreview.src = e.target.result;
            };
            reader.readAsDataURL(file);
        }
    });

    // Handle form submission
    document.getElementById("editProfileForm").addEventListener("submit", function (e) {
        e.preventDefault();
        
        const updatedUser = {
            name: document.getElementById("edit-name").value,
            age: document.getElementById("edit-age").value,
            flatNo: document.getElementById("edit-flat-no").value,
            phoneNumber: document.getElementById("edit-phone-number").value,
            profession: document.getElementById("edit-profession").value,
            email: document.getElementById("edit-email").value
        };

        localStorage.setItem("user", JSON.stringify(updatedUser));

        // Redirect to profile page after saving changes
        window.location.href = "profile.html";
    });
});
