import { useEffect, useState } from "react";
import "./WordCounter.css";
import NamasteButton from "../../project-component/NamasteButton";
import questionLinks from "../../constants/questionsLinks";

function WordCounter() {
  const [text, setText] = useState("");
  const [count, setCount] = useState([]);

  function handleCount() {
    const cleanedText = text
      .toLowerCase()
      .replace(/[^a-zA-Z\s]/g, "")
      .trim();
    const words = cleanedText.split(/\s+/).filter((word) => word.length > 0);

    const wordMap = new Map();
    for (let i = 0; i < words.length; i++) {
      let word = words[i];
      wordMap.set(word, (wordMap.get(word) || 0) + 1);
    }

    const sortedArray = Array.from(wordMap.entries()).sort(
      (a, b) => b[1] - a[1]
    );
    setCount(sortedArray);
  }
  useEffect(() => {
    handleCount();
  }, [text]);

  useEffect(() => {
    document.body.style.backgroundColor = "#f5f5f5";
  }, []);
  return (
    <div className="wordCounter">
      <h1>Word Frequency Counter</h1>
      <p>
        Quickly find how many times each word appears in your text for better
        insights.
      </p>

      <div className="wordCounter-container">
        <textarea
          className="textarea"
          placeholder="Type your text here"
          onChange={(e) => setText(e.target.value)}
          data-testid="textarea"
        ></textarea>

        {count.length > 0 && (
          <div className="results">
            <h3>Word Frequencies</h3>
            <ul data-testid="result-list">
              {count.map(([word, count], index) => (
                <li key={word} data-testid={`word-${word}`} className="list">
                  <strong>{word} count</strong>: {count}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <NamasteButton url={questionLinks.wordCounter} />
    </div>
  );
}
export default WordCounter;
