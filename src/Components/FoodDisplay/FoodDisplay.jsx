import React, { useContext } from "react";
import "./FoodDisplay.css";
import { StoreContext } from "../../Context/StoreContext";
import FoodItem from "../FoodItem/FoodItem";

const FoodDisplay = ({ category }) => {
  const { food_list } = useContext(StoreContext); // This will work if wrapped properly

  return (
    <div className="food-display" id="food-display">
      <h2>Top Dishes Near you!!</h2>
      <div className="food-display-list">
        {food_list.map((item,index) => {

          {console.log(category, item.category);}

          if (category==="ALL" || category === item.category) {

          return <FoodItem key={index} id={item._id} name={item.name} price={item.price} description={item.description} image={item.image} />;
          } 
        })}

      </div>
    </div>
  );
};

export default FoodDisplay;
