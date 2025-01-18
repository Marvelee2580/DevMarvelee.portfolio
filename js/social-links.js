document.addEventListener("DOMContentLoaded", () => {
    const links = document.querySelectorAll(".social-links a");
    const clickSound = new Audio("js/click-sound.wav"); // Replace with the path to your sound file

    // Sequential animation for icons
    links.forEach((link, index) => {
        setTimeout(() => {
            link.style.transform = "scale(1)";
            link.style.opacity = "1";
        }, index * 100); // Stagger animations by 100ms
    });

    // Add click animation with ripple effect and sound
    links.forEach((link) => {
        link.addEventListener("click", function (e) {
            e.preventDefault(); // Prevent default click action (optional)
            const targetUrl = link.href;

            // Play click sound
            clickSound.play();

            // Add ripple effect
            const ripple = document.createElement("span");
            const rect = this.getBoundingClientRect();
            ripple.style.left = `${e.clientX - rect.left}px`;
            ripple.style.top = `${e.clientY - rect.top}px`;
            ripple.classList.add("ripple");
            this.appendChild(ripple);

            // Cleanup ripple
            setTimeout(() => ripple.remove(), 600);

            // Shrinking effect
            link.style.transform = "scale(0.8)";
            setTimeout(() => {
                link.style.transform = "scale(1)";
                window.open(targetUrl, "_blank"); // Open link in a new tab
            }, 200);
        });
    });

    // Track clicks and log analytics
    links.forEach((link) => {
        link.addEventListener("click", () => {
            console.log(`User clicked on: ${link.getAttribute("aria-label")}`);
        });
    });
});