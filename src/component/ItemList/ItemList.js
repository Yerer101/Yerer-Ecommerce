import React from "react";
import ListData from "./ItemListData";
import "./ItemList.css";

const ItemList = (props) => {
  const itemList = ListData.map((item, index) => {
    return (
      <li key={index} className="item-list" onClick={props.clicked}>
        {item.name}
        <span className="arrow-down"></span>
      </li>
    );
  });

  return <ul className="item-container">{itemList}</ul>;
};

export default ItemList;
