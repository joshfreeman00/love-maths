// wait for the dom to finish loading before playing the game
// get the button elements and add event listeners to them

document.addEventListener("DOMContentLoaded", function () {
    let buttons = document.getElementsByTagName("button");
    for (button of buttons) {
        button.addEventListener("click", function () {
            if (this.getAttribute("data-type") === "submi") {
                alert("You clicked submit!");
            } else {
                let gameType = this.getAttribute("data-type");
                runGame(gameType);

            }
        })
    }

    runGame("addition");
})
/**
 * The main game "loop", called whe the script is loaded and afer the users answer has been processed
 */
function runGame(gameType) {

    // Generates a random number between 1 and 25
    let num1 = Math.floor(Math.random() * 25) + 1;
    let num2 = Math.floor(Math.random() * 25) + 1;

    if (gameType === "addition") {
        displayAdditionQuestion(num1, num2);
    } else {
        alert(`Unknown game type: ${gameType}`);
        throw `Unknown game type: ${gameType}. Aborting!`;
    }
}

function checkAnswer() {

}

function calculateCorrectAnswer() {

}

function incrementScore() {

}

function incrementWrongAnswer() {

}

function displayAdditionQuestion(operand1, operand2) {

}

function displaySubtractionQuestion() {

}

function displayMultiplyQuestion() {

}