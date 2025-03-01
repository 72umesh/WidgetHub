import { Link } from "react-router-dom";
import Header from "../project-component/Header";

function ProjectPage({ children }) {
  return (
    <div>
      <Header />
      {children}
      <Link to="/" className="Back-Button">
        ← Back
      </Link>
    </div>
  );
}
export default ProjectPage;
