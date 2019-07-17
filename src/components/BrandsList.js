import React from "react";
import "./BrandsList.css";

const BrandsList = ({ brand, handleBrandDetail }) => {
  return (
    <div className="brandItem" onClick={() => handleBrandDetail(brand.id)}>
      <div className="brandBody">
        <img src={brand.logo} alt={brand.name} />
      </div>
      <p className="brandName">{brand.name}</p>
    </div>
  );
};

export default BrandsList;
