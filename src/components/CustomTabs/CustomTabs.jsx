import { useEffect } from "react";
import "./CustomTabs.css";
import Tabs from "./Tabs";

function CustomTab() {
  useEffect(() => {
    document.body.style.backgroundColor = "#B5FCCD";
  }, []);
  return (
    <div className="customTabs">
      <h1>Custom Tabs</h1>
      <p>
        A simple tab system that shows different text when each tab is clicked.
      </p>

      <div className="customTabs-container">
        <Tabs />
      </div>
    </div>
  );
}

export default CustomTab;
