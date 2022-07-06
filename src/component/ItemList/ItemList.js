import React from "react";
import List from "./List";
import "./ItemList.css";
import ItemListTemplate from "./ItemListTemplate";

const ItemList = () => {
  const itemList = List.map((item, index) => {
    // return <ItemListTemplate key={index} value={item.name} />;
    return (
      <div key={index}>
        <ItemListTemplate values={item} />
      </div>
    );
  });

  return <div>{itemList}</div>;
};

export default ItemList;
