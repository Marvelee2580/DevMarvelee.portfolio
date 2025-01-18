document.addEventListener("DOMContentLoaded", () => {
        const messages = [
            "Hi, I'm Dev Marvelee",
            "How may I assist you today?",
            "Wanna create the best website online?",
            "Wanna collaborate with me?",
            "I would love to hear it all!",
            "I can help you build your website"
        ];
        const messageElement = document.querySelector("#dynamicMessage");
        let currentIndex = 0;

        function showNextMessage() {
            // Special handling for the first message
            const delay = currentIndex === 0 ? 500: 1000; 

            // Remove visibility class and update the text
            messageElement.classList.remove("visible");
            setTimeout(() => {
                messageElement.textContent = messages[currentIndex];
                messageElement.classList.add("visible");

                // Update the index and loop back if necessary
                currentIndex = (currentIndex + 1) % messages.length;
            }, delay); // Adjust fade-out time based on the delay
        }

        // Start the cycle
        setInterval(showNextMessage, 4000); // Change message every 4 seconds
        showNextMessage(); // Show the first message immediately
    });