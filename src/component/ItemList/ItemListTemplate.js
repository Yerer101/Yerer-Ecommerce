import React from "react";

const ItemListTemplate = ({ values }) => {
  // console.log(values);
  return (
    <div className="ul-container">
      <ul>
        <li>
          {values.name}
          <span className="arrow-down"></span>
        </li>
      </ul>
    </div>
  );
};

export default ItemListTemplate;
