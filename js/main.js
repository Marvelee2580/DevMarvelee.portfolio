function updateTime() {
    const timeDisplay = document.getElementById("time-display");
    const now = new Date();

    // Convert to Lagos time (GMT+1)
    const options = {
        timeZone: "Africa/Lagos",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true
    };
    const lagosTime = new Intl.DateTimeFormat("en-GB", options).format(now);

    timeDisplay.textContent = lagosTime; // Update time in the DOM
}

// Update time every second
setInterval(updateTime, 1000);

// Initialize time immediately when the script loads
updateTime();



// Dynamic Year Update
const yearElement = document.querySelector(".footer-copyright");
const currentYear = new Date().getFullYear();
yearElement.innerHTML = `&copy; ${currentYear} Dev Marvelee. Designed with <span id="heart">❤️</span> by <strong>Dev Marvelee</strong>.`;

//  Subtle Heart Interaction
const heart = document.getElementById("heart");
heart.addEventListener("mouseenter", () => {
    heart.style.color = "#FF5733"; // Vibrant color on hover
    heart.style.transform = "scale(1.2)";
});
heart.addEventListener("mouseleave", () => {
    heart.style.color = "";
    heart.style.transform = "scale(1)";
});


// Inspiring Message Animation
const footerNote = document.querySelector(".footer-note");
let messageIndex = 0;
const messages = [
    "Innovation meets creativity.",
    "Building solutions, inspiring change.",
    "Your ideas, brought to life."
];

function changeFooterMessage() {
    footerNote.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
}
setInterval(changeFooterMessage, 5000); // Rotate message every 5 seconds

// Resume view
document.getElementById('portfolio-btn').addEventListener('click', function() {
    document.getElementById('resume-viewer').classList.add('show');
});

document.getElementById('close-resume-btn').addEventListener('click', closeResume);
document.getElementById('resume-backdrop').addEventListener('click', closeResume);

function closeResume() {
    document.getElementById('resume-viewer').classList.remove('show');
}

// Close on Escape key press
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        closeResume();
    }
});
