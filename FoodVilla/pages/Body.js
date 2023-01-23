import React from "react";
import RestaurantCard from "../components/RestaurantCard";

restaurant_list = [
  {
    name: "KFC",
    logo: "https://upload.wikimedia.org/wikipedia/en/thumb/b/bf/KFC_logo.svg/1024px-KFC_logo.svg.png",
    cusines: ["Chicken", "American"],
  },
  {
    name: "McDonalds",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/McDonald%27s_Golden_Arches.svg/1024px-McDonald%27s_Golden_Arches.svg.png",
    cusines: ["Burger", "American"],
  },
  {
    name: "Taco Bell",
    logo: "https://locations.tacobell.com/permanent-b0b701/assets/images/TBUS_Logo.7bd20747.svg",
    cusines: ["Tacos", "Mexican"],
  },
  {
    name: "Velvet Taco",
    logo: "https://www.everythinglubbock.com/wp-content/uploads/sites/35/2020/08/VT.jpg?w=1280",
    cusines: ["Tacos", "Mexican"],
  },
  {
    name: "Tikka Shack",
    logo: "https://www.tikkashack.com/uploads/b/ad9ac71d2f8e984c93e40ae90114b340e56db5e31237e0ebbe8c6cca5a4c4973/20190201_181457%202_1665522127.jpg",
    cusines: ["Indian", "Chicken"],
  },
  {
    name: "Hawaii Poke and Ramen",
    logo: "https://media-cdn.grubhub.com/image/upload/d_search:browse-images:default.jpg/w_300,q_100,fl_lossy,dpr_2.0,c_fit,f_auto,h_300/ihp3cg6rgx3d8bv9rkk3",
    cusines: ["Hawai", "Ramen"],
  },
];

const Body = () => {
  return (
    <div className="body">
      {restaurant_list.map((restaurant) => {
        return (
          <RestaurantCard
            name={restaurant.name}
            logo={restaurant.logo}
            cusines={restaurant.cusines}
          />
        );
      })}
    </div>
  );
};

export default Body;
