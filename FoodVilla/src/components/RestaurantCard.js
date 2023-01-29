import React from "react";

const RestaurantCard = ({ name, logo, cusines }) => {
  return (
    <div className="restaurant-card">
      <h2> {name} </h2>
      <img className="restaurant-logo" alt="restaurant-logo" src={logo} />
      <h3> About </h3>
      <h4>
        {cusines[0]}, {cusines[1]}
      </h4>
    </div>
  );
};

export default RestaurantCard;
