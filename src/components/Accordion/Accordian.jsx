import { useEffect, useState } from "react";
import data from "./data.js";
import "./Accordian.css";

function Accordian() {
  const [selected, setSelected] = useState(null);
  const [multiselected, setMultiSelected] = useState(false);
  const [multiselectedStored, setMultiSelectedStored] = useState([]);

  function handleSingleSelection(currentID) {
    setSelected(selected === currentID ? null : currentID);
  }

  function handleMultipleSelection(currentID) {
    if (multiselectedStored.includes(currentID)) {
      setMultiSelectedStored(
        multiselectedStored.filter((id) => id !== currentID)
      );
    } else {
      setMultiSelectedStored([...multiselectedStored, currentID]);
    }
  }

  useEffect(() => {
    document.body.style.backgroundColor = " #A27B5C";
  }, []);
  return (
    <div className="accordian">
      <h1>Accordian</h1>
      <p>
        An accordion is a list of headers that hide or reveal additional content
        when selected.
      </p>
      <div className="multibutton">
        <label className="multibutton-switch">
          <input
            type="checkbox"
            onClick={() => setMultiSelected(!multiselected)}
          ></input>
          <span className="multibutton-slider"></span>
        </label>
        <p>Enable Multiple Selection</p>
      </div>
      <div className="accordian-container">
        {data && data.length > 0 ? (
          data.map((dataItems) => (
            <div key={dataItems.id} className="item">
              <div
                className="item-title"
                onClick={() =>
                  multiselected
                    ? handleMultipleSelection(dataItems.id)
                    : handleSingleSelection(dataItems.id)
                }
              >
                <h3>{dataItems.question}</h3>
                <span>+</span>
              </div>
              {selected === dataItems.id ||
              multiselectedStored.includes(dataItems.id) ? (
                <div className="item-content">{dataItems.answer}</div>
              ) : null}
            </div>
          ))
        ) : (
          <div>Data Not Found</div>
        )}
      </div>
    </div>
  );
}
export default Accordian;
