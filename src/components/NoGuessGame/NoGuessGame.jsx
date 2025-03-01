import "./NoGuessGame.css";
import { useEffect, useState } from "react";

function NoGuessGame() {
  const min = 1;
  const max = 100;
  const [guess, setGuess] = useState("");
  const [message, setMessage] = useState("");
  const [attempts, setAttempts] = useState(0);
  const [randomNo] = useState(
    Math.floor(Math.random() * (max - min + 1)) + min
  );

  function handleInput(e) {
    let newValue = parseInt(e.target.value);
    setGuess(newValue);
  }

  function guessNumber() {
    const numGuess = Number(guess);

    if (isNaN(numGuess) || numGuess <= 0 || numGuess > 100) {
      setMessage("Please Enter a valid Number between 1 and 100");
      return;
    }
    setAttempts(attempts + 1);

    if (numGuess < randomNo) {
      setMessage("TOO LOW! Try Again");
    } else if (numGuess > randomNo) {
      setMessage("TOO HIGH! Try Again");
    } else {
      setMessage(
        `Correct! The Answer was ${randomNo} .It took you ${
          attempts + 1
        } attempts`
      );
    }
  }

  useEffect(() => {
    document.body.style.backgroundColor = " #F2E5BF";
  }, []);
  return (
    <div className="noGuessGame">
      <h1>Guess The Number</h1>
      <p>Guess a Random Number Between 1 and 100 </p>

      <div className="noGuessGame-container">
        <input
          type="number"
          value={guess}
          id="myInput"
          onChange={handleInput}
        />
        <button onClick={guessNumber} className="guess-btn">
          Guess
        </button>
        <p className="result">{message}</p>
      </div>
    </div>
  );
}
export default NoGuessGame;
