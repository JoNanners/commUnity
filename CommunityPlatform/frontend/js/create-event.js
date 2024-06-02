// create-event.js

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("createEventForm").addEventListener("submit", function (e) {
        e.preventDefault();

        const eventTitle = document.getElementById("event-title").value;
        const eventDescription = document.getElementById("event-description").value;
        const eventLocation = document.getElementById("event-location").value;
        const eventDate = document.getElementById("event-date").value;
        const eventTime = document.getElementById("event-time").value;
        const contactDetails = document.getElementById("contact-details").value;

        alert(`Event created:\nTitle: ${eventTitle}\nDescription: ${eventDescription}\nLocation: ${eventLocation}\nDate: ${eventDate}\nTime: ${eventTime}\nContact Details: ${contactDetails}`);

        window.location.href = "events.html";
    });
});
