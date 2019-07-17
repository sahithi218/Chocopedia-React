import React from "react";
import "./ChocolateListItem.css";

const ChocolateListItem = ({ chocolateList, handleChocolateDetail }) => (
  <div
    className="card-item"
    onClick={() => handleChocolateDetail(chocolateList.id)}
  >
    <div className="cardBody">
      <img src={chocolateList.image} alt={chocolateList.name} />
    </div>
    <p className="cardName">{chocolateList.name}</p>
  </div>
);

export default ChocolateListItem;
