import { HashRouter as Router, Routes, Route } from "react-router-dom";
import ProjectPage from "./pages/ProjectPage";
import Home from "./project-component/Home";

import PasswordGenerator from "./components/PasswordGenerator/PasswordGenerator";
import DiceRoller from "./components/DiceRoller/DiceRoller";
import Counter from "./components/Counter/Counter";
import NoGuessGame from "./components/NoGuessGame/NoGuessGame";
import Accordian from "./components/Accordion/Accordian";
import LoadMoreData from "./components/LoadMoreData/LoadMoreData";
import ImageSliderURL from "./components/ImageSliderURL/ImageSliderURl";
import Rating from "./components/Rating/Rating";
import RockPaperScissor from "./components/RockPaperScissor/RockPaperScissor";

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
          path="/load-more-data"
          element={
            <ProjectPage>
              <LoadMoreData />
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
        <Route
          path="/image-slider-url"
          element={
            <ProjectPage>
              <ImageSliderURL
                url={"https://picsum.photos/v2/list"}
                limit={"10"}
              />
            </ProjectPage>
          }
        />
        <Route
          path="/rating"
          element={
            <ProjectPage>
              <Rating />
            </ProjectPage>
          }
        />
        <Route
          path="/rock-paper-scissor"
          element={
            <ProjectPage>
              <RockPaperScissor />
            </ProjectPage>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
