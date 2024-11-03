const storyText = document.getElementById('story-text');
const choicesDiv = document.getElementById('choices');

// Initial story content
const storyParts = {
    start: {
        text: "Once upon a time, in a land far away...",
        choices: [
            { text: "Explore the forest", next: "forest" },
            { text: "Visit the castle", next: "castle" }
        ]
    },
    forest: {
        text: "You venture into the dense forest and hear strange sounds.",
        choices: [
            { text: "Investigate the sounds", next: "investigate" },
            { text: "Turn back", next: "start" }
        ]
    },
    castle: {
        text: "You arrive at the castle and see a grand entrance.",
        choices: [
            { text: "Enter the castle", next: "enter_castle" },
            { text: "Walk around", next: "start" }
        ]
    },
    investigate: {
        text: "You find a magical creature that grants you a wish!",
        choices: [
            { text: "Wish for treasure", next: "treasure" },
            { text: "Wish to return home", next: "start" }
        ]
    },
    enter_castle: {
        text: "Inside the castle, you discover a hidden library.",
        choices: [
            { text: "Read a book", next: "read_book" },
            { text: "Leave the castle", next: "start" }
        ]
    },
    treasure: {
        text: "You become rich beyond your wildest dreams!",
        choices: [
            { text: "Celebrate your fortune", next: "start" }
        ]
    },
    read_book: {
        text: "You gain knowledge of ancient spells!",
        choices: [
            { text: "Use your magic", next: "start" }
        ]
    }
};

// Function to display the story and choices
function displayStory(part) {
    storyText.textContent = storyParts[part].text;
    choicesDiv.innerHTML = ''; // Clear previous choices
    storyParts[part].choices.forEach(choice => {
        const button = document.createElement('button');
        button.textContent = choice.text;
        button.onclick = () => displayStory(choice.next);
        choicesDiv.appendChild(button);
    });
}

// Start the story
displayStory('start');
