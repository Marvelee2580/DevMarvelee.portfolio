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

// Sophisticated Footer Features

// 1. Dynamic Year Update
const yearElement = document.querySelector(".footer-copyright");
const currentYear = new Date().getFullYear();
yearElement.innerHTML = `&copy; ${currentYear} Dev Marvelee. Designed with <span id="heart">❤️</span> by <strong>Dev Marvelee</strong>.`;

// 2. Subtle Heart Interaction
const heart = document.getElementById("heart");
heart.addEventListener("mouseenter", () => {
    heart.style.color = "#FF5733"; // Vibrant color on hover
    heart.style.transform = "scale(1.2)";
});
heart.addEventListener("mouseleave", () => {
    heart.style.color = "";
    heart.style.transform = "scale(1)";
});

// 3. Smooth Scroll to Contact Section (if available)
document.querySelectorAll("a[href^='mailto:']").forEach((link) => {
    link.addEventListener("click", (event) => {
        event.preventDefault(); // Prevent default email client opening
        const contactSection = document.getElementById("contact"); // Assuming a contact section exists
        if (contactSection) {
            contactSection.scrollIntoView({ behavior: "smooth", block: "start" });
            highlightSection(contactSection);
        } else {
            window.location.href = link.getAttribute("href");
        }
    });
});

// 4. Highlight Contact Section on Scroll
function highlightSection(section) {
    section.style.transition = "background-color 0.3s ease";
    section.style.backgroundColor = "#FFD700"; // Highlight color
    setTimeout(() => (section.style.backgroundColor = ""), 1500); // Revert color after 1.5s
}

// 5. Inspiring Message Animation
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