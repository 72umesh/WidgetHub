import projects from "../constants/projects";
import { FaRandom } from "react-icons/fa";

function RandomWidget() {
  function handleRandomNavigation() {
    if (projects.length === 0) return;
    const randomProject = projects[Math.floor(Math.random() * projects.length)];

    window.location.href = `/WidgetHub/#${randomProject.route}`;
  }

  return (
    <div className="randomWidget">
      <button onClick={handleRandomNavigation}>
        <FaRandom />
        <span>Try a Random Widget</span>
      </button>
      ;
    </div>
  );
}

export default RandomWidget;
