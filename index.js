var Word = require("./word.js");
var inquire = require("inquirer");

var letterArray = "abcdefghijklmnopqrstuvwxyz";

var countries = [
    "china",
    "india",
    "united states",
    "indonesia",
    "brazil",
    "pakistan",
    "nigeria",
    "bangladesh",
    "russia",
    "mexico",
    "japan",
    "ethiopia",
    "phillippines",
    "egypt",
    "vietnam",
    "dr congo",
    "turkey",
    "iran",
    "germany",
    "thailand",
    "united kingdom",
    "france",
    "tanzania",
    "italy",
    "south africa",
    "myanmar",
    "kenya",
    "south korea",
    "colombia",
    "spain",
    "uganda",
    "argentina",
    "ukraine",
    "algeria",
    "sudan",
    "iraq",
    "poland",
    "canada",
    "afghanistan",
    "morocco",
    "saudi arabia",
    "peru",
    "uzbekistan",
    "venezuela",
    "malaysia",
    "angola",
    "mozambique",
    "ghana",
    "nepal",
    "yemen"
];

var randomIndex = Math.floor(Math.random() * countries.length);
var randomWord = countries[randomIndex];

var computerWord = new Word(randomWord);

var incorrectLetters = [];
var correctLetters = [];

var guessesLeft = 10;
var userAnswer;

function guessGame() {
    inquire
        .prompt([
            {
                type: "input",
                message: "Pick a letter from A to Z",
                name: "userInput"
            }
        ]).then(function (input) {

            var correctGuess = computerWord.userGuess(input.userInput)
            if (correctGuess) {
                console.log("You are correct!")
            } else {
                console.log("Try again!")
                console.log("Guesses Left: " + guessesLeft + "\n");
                guessesLeft--;
            }

            if (guessesLeft < 1) {
                console.log("You lose!")
                restartGame();
            } else if (computerWord.guessedCorrectly()) {
                console.log("You are correct!");
                guessesLeft = 10;
                restartGame();
            } else {
                playGame()
            }
            // console.log("Letters Guessed: " + incorrectLetters.join(" ") + "\n");
        }).catch(function (err) {
            console.log(err)
        });
}

function restartGame() {
    inquire
        .prompt([
            {
                type: "list",
                message: "Would you like to:",
                choices: ["Play again", "Quit"],
                name: "restart"
            }
        ])
        .then(function (input) {
            if (input.restart === "Play again") {
                requireNewWord = true;
                incorrectLetters = [];
                correctLetters = [];
                guessesLeft = 10;
                guessGame();
            } else {
                console.log("Goodbye!")
                process.exit(0)
            }
        }).catch(function (err) {
            console.log(err)
        });
}

function playGame() {
    guessGame()
    // .then(function () {

    // }).catch(function (err) {
    //     console.log(err)
    // });
}

playGame();