import MenuItem from "./MenuItem";
import "./TreeView.css";

function MenuList({ list = [] }) {
  return (
    <ul className="menu-list-container">
      {list &&
        list.length &&
        list.map((listitem) => <MenuItem item={listitem} key={listitem.to} />)}
    </ul>
  );
}

export default MenuList;
