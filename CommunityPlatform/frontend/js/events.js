document.addEventListener("DOMContentLoaded", function () {
    var calendarEl = document.getElementById("calendar");
    var calendar = new FullCalendar.Calendar(calendarEl, {
        initialView: 'dayGridMonth',
        events: [
            {
                title: 'Event 1',
                start: '2024-06-10'
            },
            {
                title: 'Event 2',
                start: '2024-06-15',
                end: '2024-06-17'
            }
        ]
    });
    calendar.render();
});
