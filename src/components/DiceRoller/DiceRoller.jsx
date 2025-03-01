import { useState, useEffect } from "react";
import dRImages from "./images";
import "./DiceRoller.css";

function DiceRoller() {
  const [noOfDice, setNoOfDice] = useState(1);
  const [textResult, setTextResult] = useState("");
  const [imgResult, setImgResult] = useState([]);

  function rollDice() {
    if (!noOfDice) {
      alert("No Of Dice Cannot be Empty");
      setNoOfDice(1);
    }
    const newResult = [];
    const newImages = [];
    for (let i = 0; i < noOfDice; i++) {
      const randomNo = Math.floor(Math.random() * 6) + 1;
      newResult.push(randomNo);
      newImages.push(dRImages[`Dice${randomNo}`]);
    }
    setTextResult(newResult.join("-"));
    setImgResult(newImages);
  }

  function handleInput(e) {
    let newValue = parseInt(e.target.value);
    if (newValue > 9) {
      setNoOfDice(9);
      setTextResult("Max No of Dice to Roll is  9");
    } else setNoOfDice(newValue);
  }
  useEffect(() => {
    document.body.style.backgroundColor = "#fcfaee";
  }, []);
  return (
    <div className="diceRoller">
      <h1>Dice Roller</h1>
      <p>Click the Button to Roll the Dice</p>

      <div className="diceRoller-container">
        <label htmlFor="noOfDice">No Of Dice to Roll</label>
        <input
          type="number"
          id="noOfDice"
          min="1"
          max="9"
          value={noOfDice}
          onChange={handleInput}
        />

        <button onClick={rollDice} className="roll-btn">
          Roll Dice
        </button>
        <div className="rolldice-result">
          <p>{textResult}</p>

          {imgResult.map((src, index) => (
            <img key={index} src={src} />
          ))}
        </div>
      </div>
    </div>
  );
}
export default DiceRoller;
