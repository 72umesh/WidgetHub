import { useEffect, useState } from "react";
import "./PasswordGenerator.css";
import { FiClipboard } from "react-icons/fi";

function PasswordGenerator() {
  const [password, setPassword] = useState("");
  const [length, setLength] = useState(4);
  const [includeLowerCase, setIncludeLowerCase] = useState(true);
  const [includeUpperCase, setIncludeUpperCase] = useState(false);
  const [includeNumbers, setIncludeNumbers] = useState(false);
  const [includeSymbols, setIncludeSymbols] = useState(false);

  function generatePassword() {
    if (!length || length === 0) {
      alert("Length cannot be Empty or 0");
    }
    let characters = "";
    if (includeLowerCase) characters += "abcdefghijklmnopqrstuvwxyz";
    if (includeUpperCase) characters += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (includeNumbers) characters += "1234567890";
    if (includeSymbols) characters += "!@#$%^&*();:";

    if (characters.length === 0) {
      setPassword("Select at least one option");
      return;
    }

    let generatedPassword = "";
    for (let i = 0; i < length; i++) {
      const random = Math.floor(Math.random() * characters.length);
      generatedPassword += characters[random];
    }
    setPassword(generatedPassword);
  }
  function handleLengthChange(e) {
    let newlength = parseInt(e.target.value);
    if (newlength > 20) {
      setPassword("Max length is 20!");
      newlength = 20;
    }
    setLength(newlength);
  }
  function copytoClipboard() {
    navigator.clipboard.writeText(password);
    alert("Copied to Clipboard");
  }

  useEffect(() => {
    document.body.style.backgroundColor = "#fefae0";
  }, []);

  return (
    <div className="passwordGenerator">
      <h1>Password Generator</h1>
      <p>Create a secure and Strong Password, to keep your account Safe</p>

      <div className="passwordGenerator-container">
        <label htmlFor="passwordLength">
          Password Length
          <input
            type="number"
            value={length}
            id="passwordLength"
            min="1"
            max="20"
            onChange={handleLengthChange}
          />
        </label>
        <div className="checkboxes">
          <label>
            <input
              type="checkbox"
              checked={includeLowerCase}
              onChange={() => setIncludeLowerCase(!includeLowerCase)}
            />
            Include LowerCase
          </label>

          <label>
            <input
              type="checkbox"
              checked={includeUpperCase}
              onChange={() => setIncludeUpperCase(!includeUpperCase)}
            />
            Include UpperCase
          </label>

          <label>
            <input
              type="checkbox"
              checked={includeNumbers}
              onChange={() => setIncludeNumbers(!includeNumbers)}
            />
            Include Numbers
          </label>
          <label>
            <input
              type="checkbox"
              checked={includeSymbols}
              onChange={() => setIncludeSymbols(!includeSymbols)}
            />
            Include Symbols
          </label>
        </div>
        <button className="generate-btn" onClick={generatePassword}>
          Generate
        </button>
        <div className="result">
          <input
            type="text"
            readOnly
            value={password}
            onClick={copytoClipboard}
          />
          <FiClipboard onClick={copytoClipboard} />
        </div>
      </div>
    </div>
  );
}

export default PasswordGenerator;
