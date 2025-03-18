document.addEventListener("DOMContentLoaded", function() {
    const menuIcon = document.getElementById("menu-icon");
    const menuList = document.getElementById("menuList");

    menuIcon.addEventListener("click", function() {
        menuList.classList.toggle("active");
    });
});



const typewriterElement = document.querySelector('.typewriter-text');
const lines = [
    "JOEL DIBDIB",
    "DEVELOPER.",
    "GRAPHIC DESIGNER.",
    "USER INTERFACE DESIGNER."
];

let lineIndex = 0;

function typeLine(line) {
    typewriterElement.textContent = ''; // Clear the text before typing
    let charIndex = 0;

    // Simulate typing effect
    const interval = setInterval(() => {
        typewriterElement.textContent += line[charIndex];
        charIndex++;
        if (charIndex === line.length) {
            clearInterval(interval);
            // After typing a line, wait a moment, then move to the next line
            setTimeout(() => {
                lineIndex = (lineIndex + 1) % lines.length; // Loop back to the first line
                typeLine(lines[lineIndex]);
            }, 1500); // Pause before typing the next line
        }
    }, 100); // Adjust this for typing speed
}

// Start typing the first line
typeLine(lines[lineIndex]);