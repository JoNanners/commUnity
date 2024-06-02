// events.js

document.addEventListener("DOMContentLoaded", function () {
    const upcomingEvents = [
        { title: "Event 1", date: "2024-06-10", time: "09:00", description: "Description for Event 1" },
        { title: "Event 2", date: "2024-06-15", time: "14:00", description: "Description for Event 2" },
    ];

    // Display upcoming events
    const upcomingEventsContainer = document.getElementById("upcoming-events");
    upcomingEvents.forEach(event => {
        const eventBox = document.createElement("div");
        eventBox.classList.add("event-box");
        eventBox.innerHTML = `
            <h3>${event.title}</h3>
            <p>Date: ${event.date}</p>
            <p>Time: ${event.time}</p>
            <p>Description: ${event.description}</p>
        `;
        upcomingEventsContainer.appendChild(eventBox);
    });
});
