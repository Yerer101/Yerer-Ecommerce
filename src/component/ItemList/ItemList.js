import React, { useState } from "react";
import ListData from "./ItemListData";
import "./ItemList.css";

const ItemList = () => {
  const [showList, setShowList] = useState(false);

  const showItemList = () => setShowList((prevState) => !prevState);

  const itemLists = ListData.map((item, index) => {
    return (
      <div key={index}>
        <ul className="btn-dropdownContainer">
          <li className="dropdown-list" onClick={() => showItemList()}>
            {item.name}
            <span className="dropdown-arrow"></span>
          </li>
        </ul>

        <ul
          className={
            showList ? "dropdown-container show" : "dropdown-container"
          }
        >
          {item.itemList.map((list, i) => (
            <li className="dropdown-item" key={i}>
              {list}
            </li>
          ))}
        </ul>
      </div>
    );
  });

  return <div className="item-container">{itemLists}</div>;
};

export default ItemList;
