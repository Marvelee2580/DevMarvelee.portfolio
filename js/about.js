document.addEventListener('DOMContentLoaded', () => {
    const quoteBtn = document.getElementById('quote-btn');
    const skillsList = document.getElementById('skills-list');
    const quoteContainer = document.getElementById('quote-container');

    // Predefined skills
    const skills = [
        "HTML5, CSS3, JavaScript (ES6+)",
        "Tailwind CSS",
        "TypeScript, React",
        "MongoDB, SQL",
        "Responsive Design, UX/UI",
        "Git, GitHub, CI/CD"
    ];

    // Motivational quotes
    const quotes = [
        "Great ideas come from hard work. Start today, and you'll thank yourself tomorrow.",
        "The future belongs to those who believe in the beauty of their dreams.",
        "Success is no accident. It's hard work, perseverance, learning, and most of all, love for what you are doing.",
        "Every great project starts with a single line of code. Don't be afraid to take that first step!",
        "The best way to predict the future is to create it. Your next big idea could change everything."
    ];

    // Load skills into the container
    skillsList.innerHTML = skills.map(skill => `<li><i class="fas fa-check"></i> ${skill}</li>`).join('');

    // Event listener for Quotes button
    quoteBtn.addEventListener('click', () => {
        const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
        quoteContainer.innerHTML = `<p>${randomQuote}</p>`;
        quoteContainer.classList.remove('hidden');
        quoteContainer.classList.add('fadeIn');
    });
});
