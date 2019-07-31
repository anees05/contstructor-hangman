var Letter = require("./letter.js");

function Word(word) {
    // this.objArray = [];

    // for (var i = 0; i < answer.length; i++) {
    //     var letter = new Letter(answer[i]);
    //     this.objArray.push(letter);
    // }

    this.letterArr = word.split("").map(
        function (char) {
            return new Letter(char)
        }
    )

    this.toString = function () {
        // answerLog = "";
        // for (var i = 0; i < this.letterArr.length; i++) {
        //     answerLog += this.objArray[i] + " ";
        // }
        // console.log(answerLog + "\n=========================\n")
        return this.letterArr.join(" ")

    };

    this.userGuess = function (char) {
        // for (var i = 0; i < this.objArray.length; i++) {
        //     this.objArray[i].guess(input);
        // }
        var correctLetter = false
        this.letterArr.forEach(function (letter) {
            if (letter.guessed(char)) {
                correctLetter = true
            }
        })
        console.log(this)
        return correctLetter;
    };

    this.guessedCorrectly = function () {
        return this.letterArr.every(function(letter){
            return letter.visible;
        })

    }
}

module.exports = Word;