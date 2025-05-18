import { Link } from "react-router-dom";
import Header from "../project-component/Header";
import Footer from "../project-component/Footer";

function ProjectPage({ children }) {
  return (
    <div>
      <div className="project-page-container">
        <Header />
        {children}
        <Link to="/" className="Back-Button">
          ← Back
        </Link>
      </div>
      <Footer />
    </div>
  );
}
export default ProjectPage;
