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
                alert(`You clicked ${gameType}`);

            }
        })
    }
})
/**
 * The main game "loop", called whe the script is loaded and afer the users answer has ben processed
 */
function runGame() {

    // Generates a random number between 1 and 25
    let num1 = Math.floor(Math.random() * 25) + 1;
    let num2 = Math.floor(Math.random() * 25) + 1;
}

function checkAnswer() {

}

function calculateCorrectAnswer() {

}

function incrementScore() {

}

function incrementWrongAnswer() {

}

function displayAdditionQuestion() {

}

function displaySubtractionQuestion() {

}

function displayMultiplyQuestion() {

}