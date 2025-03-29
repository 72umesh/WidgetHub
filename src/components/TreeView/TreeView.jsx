import MenuList from "./MenuList";
import "./TreeView.css";
import { useEffect } from "react";
import menus from "./treeViewdata";

function TreeView() {
  useEffect(() => {
    document.body.style.backgroundColor = "#effffa";
  }, []);
  return (
    <div className="treeView">
      <h1>TreeView</h1>
      <p>
        A hierarchical UI component for displaying nested data in an expandable
        tree format.
      </p>
      <div className="treeView-container">{<MenuList list={menus} />}</div>
    </div>
  );
}
export default TreeView;
