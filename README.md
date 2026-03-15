🖖 Rock, Paper, Scissors, Lizard, Spock - Clean Code Edition
This is an upgraded version of the classic Jokenpô game, inspired by the "The Big Bang Theory" series. Instead of the standard 3-option logic, this project implements 5 options, managed through a highly scalable and clean architecture.

🚀 The Challenge
Standard Jokenpô logic usually relies on massive if/else or switch blocks. Adding "Lizard" and "Spock" would traditionally triple the amount of conditional code.

My goal here was to prove that well-structured data makes logic almost invisible.

🧠 Technical Highlights
1. Object-Oriented Rules (Dictionary Pattern)
Instead of checking every possibility with if statements, I mapped the game logic into a single gameRules object. Each key represents a choice, and its value is an array of what it defeats.

2. Scalability with .includes()
By using the .includes() method, the win condition was reduced from 10+ lines of code to just one:

JavaScript
} else if (gameRules[human].includes(machine)) {
    // One line to rule them all!
}

3. Dynamic Machine Choice
The AI doesn't have a fixed limit. It calculates its options based on the choices.length, making it easy to add even more options (like a "Black Hole" or "Batman") without ever touching the randomizer logic again.

🛠️ The Refactoring Journey
This project started as a standard classroom exercise with basic conditional logic. However, I decided to push my boundaries by:

Version 1.0: Basic Rock-Paper-Scissors using a chain of if/else statements.

Version 2.0 (Current): Refactored to "Lizard & Spock" edition, implementing a Dictionary Pattern and the .includes() method for O(1) complexity and cleaner code.

Check the Git history to see how the code evolved from 20+ lines of conditionals to a single, scalable line!

🛠️ Technologies Used
HTML5 (Semantic structure)

CSS3 (Custom styling and transitions)

JavaScript (ES6+) (Arrow functions, DOM manipulation, Object mapping)

Git/GitHub (Version control and Branch management)

🌎 About Me
I am a former Administrative Director with over 15 years of leadership experience, currently transitioning into Front-end Development. My background in management gives me a unique perspective on organization, process optimization, and clean code.