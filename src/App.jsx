import "./App.css";

import { HashRouter as Router, Routes, Route } from "react-router-dom";
import ProjectPage from "./pages/ProjectPage";
import Home from "./project-component/Home";

import PasswordGenerator from "./components/PasswordGenerator/PasswordGenerator";
import DiceRoller from "./components/DiceRoller/DiceRoller";
import Counter from "./components/Counter/Counter";
import NoGuessGame from "./components/NoGuessGame/NoGuessGame";
import Accordian from "./components/Accordion/Accordian";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/accordian"
          element={
            <ProjectPage>
              <Accordian />
            </ProjectPage>
          }
        />
        <Route
          path="/password-generator"
          element={
            <ProjectPage>
              <PasswordGenerator />
            </ProjectPage>
          }
        />
        <Route
          path="/dice-roller"
          element={
            <ProjectPage>
              <DiceRoller />
            </ProjectPage>
          }
        />
        <Route
          path="/counter"
          element={
            <ProjectPage>
              <Counter />
            </ProjectPage>
          }
        />
        <Route
          path="/no-guess-game"
          element={
            <ProjectPage>
              <NoGuessGame />
            </ProjectPage>
          }
        />
      </Routes>
    </Router>

    // <>
    //   <NoGuessGame />
    // </>
  );
}

export default App;
