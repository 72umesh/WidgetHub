import { useEffect } from "react";
import "./DrumKit.css";
import drumPadsdata from "./drumPads";
import bg from "./SeaMountainSunset.jpg";

function DrumKit() {
  const drumPads = drumPadsdata;

  function PlayAudio(key) {
    const pad = drumPads.find((p) => p.key === key.toUpperCase());
    if (!pad) return;

    const audio = new Audio(`${pad.audio}`);
    audio.currentTime = 0;
    audio.play();

    const addPlaying = document.querySelector(`#${key.toUpperCase()}`);

    if (addPlaying) {
      addPlaying.classList.add("playing");
      setTimeout(() => addPlaying.classList.remove("playing"), 100);
    }
  }

  useEffect(() => {
    document.body.style.background = `url(${bg}) no-repeat center  center fixed`;
    document.body.style.backgroundSize = "cover";
    const keyBoardPress = (e) => {
      PlayAudio(e.key);
    };
    window.addEventListener("keydown", keyBoardPress);

    return () => {
      window.removeEventListener("keydown", keyBoardPress);
    };
  }, []);
  return (
    <div className="drumKit">
      <h1>Drum Kit</h1>
      <p>
        Plays drum sounds on mouse clicks or keyboard key presses for a fun
        experience.
      </p>

      <div className="drumKit-container">
        {drumPads.map((pad) => (
          <button
            className="pad"
            id={pad.key}
            key={pad.key}
            onClick={() => PlayAudio(pad.key)}
          >
            <kbd>{pad.key}</kbd>
            <span className="pad-label">{pad.label.toLocaleUpperCase()}</span>
          </button>
        ))}
      </div>
    </div>
  );
}

export default DrumKit;
