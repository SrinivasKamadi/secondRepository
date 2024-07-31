const randomNumber = Math.floor(Math.random() * 100) + 1;
const userNumber = document.querySelector("#userGuess");
const btn = document.querySelector("#btn");
const output = document.querySelector("#output");
const clientGuessDislay = document.querySelector("#guessedNumbers");
const noOfGuesses = document.querySelector("#no_of_guesses");
output.innerHTML = "results will be displayed here";
btn.addEventListener("click", coreLogic);
let guessedNumbers = [];
let guesses = 0;
function coreLogic() {
  guessedNumbers.push(userNumber.value);
  guesses++;
  noOfGuesses.innerHTML = guesses;
  if (randomNumber === Number(userNumber.value)) {
    output.innerHTML = "Your Guess is correct!..Congratulations";
  } else if (randomNumber > userNumber.value) {
    output.innerHTML = "Your guess is low";
    clientGuessDislay.innerHTML = guessedNumbers;
  } else if (randomNumber < userNumber.value) {
    output.innerHTML = "your guess is high";
    clientGuessDislay.innerHTML = guessedNumbers;
  }
}
// console.log(userNumber)
console.log(`random number is ${randomNumber}`);
