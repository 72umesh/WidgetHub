import { useState } from "react";
import SearchBar from "../project-component/SearchBar";
import ProjectList from "./ProjectList";
import Header from "./Header";
import HeroSection from "./HeroSection";
import RandomWidget from "./RandomWidget";
import Footer from "./Footer";

function Home() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div>
      <Header />
      <HeroSection />
      <div className="search-tools">
        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <RandomWidget />
      </div>

      <ProjectList searchTerm={searchTerm} />
      <Footer />
    </div>
  );
}

export default Home;
