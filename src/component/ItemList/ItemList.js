import React, { useState } from "react";
import ListData from "./ItemListData";
import "./ItemList.css";

const ItemList = () => {
  const [dropdown, setDropdown] = useState(false);

  const showDropdown = (e) => {
    setDropdown((prevState) => !prevState);
  };
  const itemLists = ListData.map((item, index) => {
    return (
      <ul className="dropdown-container" key={index}>
        <li onClick={() => showDropdown()}>
          {item.name}
          <span className="dropdown-arrow"></span>
        </li>
        <ul className={dropdown ? "dropdown show" : "dropdown"}>
          {item.itemList.map((list, i) => (
            <li key={i}>{list}</li>
          ))}
        </ul>
      </ul>
    );
  });

  return <div className="item-container">{itemLists}</div>;
};

export default ItemList;
