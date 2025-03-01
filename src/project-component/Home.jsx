import { useState } from "react";
import SearchBar from "../project-component/SearchBar";
import ProjectList from "./ProjectList";
import Header from "./Header";

function Home() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div>
      <Header />
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <ProjectList searchTerm={searchTerm} />
    </div>
  );
}

export default Home;
