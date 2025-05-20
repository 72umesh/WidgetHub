import "./TemperatureConvertor.css";
import { useEffect, useState } from "react";

function TemperatureConvertor() {
  const [temperature, setTemperature] = useState("");
  const [fromUnit, setFromUnit] = useState("");
  const [toUnit, setToUnit] = useState("");
  const [result, setResult] = useState("");
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  useEffect(() => {
    setIsButtonDisabled(!(temperature && fromUnit && toUnit));
  }, [temperature, fromUnit, toUnit]);

  function convertTemperature() {
    const value = parseFloat(temperature);

    let Celsius;
    let convertedValue;

    // Convert the Temperature to Celsius
    if (fromUnit === "Celsius") {
      Celsius = value;
    } else if (fromUnit === "Fahrenheit") {
      Celsius = (value - 32) * (5 / 9);
    } else if (fromUnit === "Kelvin") {
      Celsius = value - 273.15;
    }

    // Convert Celsius to Expected value
    if (toUnit === "Celsius") {
      convertedValue = Celsius;
    } else if (toUnit === "Fahrenheit") {
      convertedValue = Celsius * (9 / 5) + 32;
    } else if (toUnit === "Kelvin") {
      convertedValue = Celsius + 273.15;
    }

    setResult(`${value} ${fromUnit} is ${convertedValue.toFixed(2)} ${toUnit}`);
  }

  useEffect(() => {
    document.body.style.backgroundColor = "#f0f2bd";
  }, []);
  return (
    <div className="temperature-convertor">
      <h1>Temperature Convertor</h1>
      <p>
        Enter a value and convert it between Celsius, Fahrenheit, and Kelvin.
      </p>

      <div className="temperature-convertor-container">
        <div className="inputs">
          <input
            type="number"
            id="temperatureUnit"
            value={temperature}
            onChange={(e) => setTemperature(e.target.value)}
          />
          <select
            id="fromUnit"
            value={fromUnit}
            onChange={(e) => setFromUnit(e.target.value)}
          >
            <option value="">From Unit</option>
            <option value="Fahrenheit">Fahrenhit</option>
            <option value="Celsius">Celsius</option>
            <option value="Kelvin">Kelvin</option>
          </select>

          <select
            id="toUnit"
            value={toUnit}
            onChange={(e) => setToUnit(e.target.value)}
          >
            <option value="">To Unit</option>
            <option value="Fahrenheit">Fahrenhit</option>
            <option value="Celsius">Celsius</option>
            <option value="Kelvin">Kelvin</option>
          </select>
          <button
            id="convert-btn"
            disabled={isButtonDisabled}
            onClick={convertTemperature}
          >
            Convert
          </button>
        </div>
        <div>
          <p id="result">{result}</p>
        </div>
      </div>
    </div>
  );
}
export default TemperatureConvertor;
