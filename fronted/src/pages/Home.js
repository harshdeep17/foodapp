/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/jsx-pascal-case */
import React, { useEffect, useState } from "react";
import Burger_Landing from "../components/Burger_Landing";
import Foodmenu from "../components/Foodmenu";
import Footer from "../components/Footer";
import axios from 'axios';


export function useEffectAsync(effect, inputs) {
  useEffect(() => {
      effect();
  }, inputs);
}

const Home = () => {

  const [foodCategory, setFoodCategory] = useState("all");
  const [foodData, setFoodData] = useState([]);
  const [isfooddataloading, setFooddataloading] = useState(true);

  useEffectAsync(async() => {
    try{
      const res = await axios.get("http://localhost:4000/api/food/foodmenu");
      // console.log(res);
      const foodArray = res.data;
      // console.log(foodCategory);
      if(foodCategory !== "all")
      {
        // console.log("1");
        setFoodData(foodArray.filter((currEle)=> currEle.food_type === foodCategory))
        setFooddataloading(false);
      }
      else{
        // console.log("2");
        setFoodData(foodArray)
        setFooddataloading(false);
      }
      // setFoodData(foodArray)
    }
    catch(e){
      console.log(e);
    }
  }, [foodCategory]);

  return (
    <>
      <Burger_Landing/>
      <Foodmenu foodData={foodData} setFoodCategory={setFoodCategory} isfooddataloading={isfooddataloading}  setFooddataloading={setFooddataloading}/>
      <Footer/>
    </>
  );
};

export default Home;
