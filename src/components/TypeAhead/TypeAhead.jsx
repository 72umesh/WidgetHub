import "./TypeAhead.css";
import { useEffect, useState } from "react";

function TypeAhead() {
  const [cities, setCities] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [error, setError] = useState(null);

  const endpoint =
    "https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json";

  async function fetchData() {
    try {
      const res = await fetch(endpoint);
      if (!res.ok) throw new Error("Failed to fetch Data");

      const data = await res.json();
      setCities(data);
    } catch (error) {
      setError("Could not load city data. Please try again later");
      console.log(error);
    }
  }

  function findMatches(wordToMatch) {
    return cities.filter(
      (place) =>
        place.city.toLowerCase().includes(wordToMatch.toLowerCase()) ||
        place.state.toLowerCase().includes(wordToMatch.toLowerCase())
    );
  }
  const matches = findMatches(searchValue);

  function highLightedText(text, input) {
    if (!input) return text;
    const regex = new RegExp(`(${input})`, "gi");
    const parts = text.split(regex);

    return parts.map((part, index) =>
      part.toLowerCase() === input.toLowerCase() ? (
        <span className="hl" key={index}>
          {part}
        </span>
      ) : (
        <span key={index}>{part}</span>
      )
    );
  }

  useEffect(() => {
    fetchData();
  }, [endpoint]);

  useEffect(() => {
    document.body.style.backgroundColor = "#90D1CA";
  }, []);

  return (
    <div className="typeAhead">
      <h1>Type Ahead</h1>
      <p>
        Live search UI with city/state suggestions and real-time highlighted
        matches.
      </p>

      <div className="typeAhead-container">
        <form className="searchForm">
          <input
            type="text"
            placeholder="City or State"
            className="searchBar"
            onChange={(e) => setSearchValue(e.target.value)}
          />
          <ul className="suggestions">
            {searchValue && matches.length > 0 ? (
              matches.map((place) => (
                <li key={place.rank}>
                  <span>
                    {highLightedText(place.city, searchValue)},{" "}
                    {highLightedText(place.state, searchValue)}
                  </span>
                  <span>{place.population}</span>
                </li>
              ))
            ) : (
              <>
                <li>Filter for a city</li>
                <li>or a state</li>
              </>
            )}
          </ul>
        </form>
        {error && <p>{error}</p>}
      </div>
    </div>
  );
}

export default TypeAhead;
