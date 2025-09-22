import { useEffect, useState } from "react";
import "./RockPaperScissor.css";
import NamasteButton from "../../project-component/NamasteButton";
import questionLinks from "../../constants/questionsLinks";

function RockPaperScissor() {
  const choices = ["rock", "paper", "scissor"];
  const [playerChoice, setPlayerChoice] = useState(null);
  const [computerChoice, setComputerChoice] = useState(null);
  const [result, setResult] = useState("Press Any One");

  const [playerScore, setPlayerScore] = useState(0);
  const [computerScore, setComputerScore] = useState(0);

  function PlayGame(playerChoice) {
    const randomChoice = choices[Math.floor(Math.random() * 3)];
    setComputerChoice(randomChoice);
    setPlayerChoice(playerChoice);

    if (playerChoice === randomChoice) {
      setResult("It's a Tie");
    } else if (
      (playerChoice === "rock" && randomChoice === "scissor") ||
      (playerChoice === "paper" && randomChoice === "rock") ||
      (playerChoice === "scissor" && randomChoice === "paper")
    ) {
      setResult("You Win");
      setPlayerScore((c) => c + 1);
    } else {
      setResult("You Lose");
      setComputerScore((c) => c + 1);
    }
  }

  function Reset() {
    setComputerScore(0);
    setPlayerScore(0);
    setResult("Press Any One");
    setComputerChoice(null);
    setPlayerChoice(null);
  }

  useEffect(() => {
    document.body.style.backgroundColor = "#FFF9C4";
  }, []);
  return (
    <div className="rockPaperScissor">
      <h1>Rock Paper Scissor</h1>
      <p>
        A two-player hand game where each player chooses rock, paper, or
        scissors. Rock beats scissors, scissors beat paper, and paper beats
        rock.
      </p>
      <div className="rockPaperScissor-container">
        <div className="choices">
          <button onClick={() => PlayGame("rock")}> 👊</button>
          <button onClick={() => PlayGame("paper")}>🖐️</button>
          <button onClick={() => PlayGame("scissor")}>✌️</button>
        </div>
        <div className="rockPaperScissor-result">
          <p>
            You Chose: <b>{playerChoice}</b>
          </p>
          <p>
            Computer Choose : <b>{computerChoice}</b>
          </p>

          <h4 className="win-result">{result}</h4>
        </div>
        <div className="rockPaperScissor-scores">
          <h3 className="playerScore">
            Player Score : <span>{playerScore}</span>{" "}
          </h3>
          <h3 className="computerScore">
            Computer Score : <span>{computerScore}</span>{" "}
          </h3>
        </div>
        <div className="reset-scores">
          <button onClick={Reset}>Reset</button>
        </div>
      </div>

      <NamasteButton url={questionLinks.rockPaperScissor} />
    </div>
  );
}
export default RockPaperScissor;
