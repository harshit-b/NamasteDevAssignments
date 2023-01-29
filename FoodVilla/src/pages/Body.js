import React, { useState } from "react";
import RestaurantCard from "../components/RestaurantCard";
import { restaurant_list } from "../config";
import { useState } from "react";

const Body = () => {
  const [searchInput, setSearchInput] = useState("")
  const [restaurants, setRestaurants] = useState(restaurant_list)

  const filterRestaurants = (filterData) => {
    let data = restaurant_list.filter(restaurant => restaurant.name.includes(filterData))
    return data
  }

  return (
    <>
    <div className="search-container">
      <input type="text" placeholder="Search" className="search-bar" value={searchInput} onChange={(e) => setSearchInput(e.target.value)

      }/>
      <button className="search-button" onClick={() => {
        setRestaurants(filterRestaurants(searchInput))
        
      }}> Search </button>
    </div>
    <div className="body">
      {restaurants.map((restaurant) => {
        return (
          <RestaurantCard
            name={restaurant.name}
            logo={restaurant.logo}
            cusines={restaurant.cusines}
          />
        );
      })}
    </div>
    </>
  );
};

export default Body;
