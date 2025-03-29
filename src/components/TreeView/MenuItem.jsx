import MenuList from "./MenuList";
import { useState } from "react";
import "./TreeView.css";

function MenuItem({ item }) {
  const [displaycurrentChildren, setDisplayCurrentChildren] = useState({});

  function handleToggleChildren(getCurrentLabel) {
    setDisplayCurrentChildren((prevdata) => ({
      ...prevdata,
      [getCurrentLabel]: !displaycurrentChildren[getCurrentLabel],
    }));
  }
  return (
    <li className="menu-item">
      <div
        className="menu-item-div"
        onClick={() => handleToggleChildren(item.label)}
      >
        <p>{item.label}</p>
        {item && item.children && item.children.length ? <span>+</span> : null}
      </div>
      {item &&
      item.children &&
      item.children.length > 0 &&
      displaycurrentChildren[item.label] ? (
        <MenuList list={item.children} />
      ) : null}
    </li>
  );
}

export default MenuItem;
