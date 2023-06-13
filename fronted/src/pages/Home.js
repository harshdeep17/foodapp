/* eslint-disable react/jsx-pascal-case */
import React from "react";
import Burger_Landing from "../components/Burger_Landing";
import Footer from "../components/Footer";
import Food from "../features/food/Food";

const Home = () => {
  return (
    <>
      <Burger_Landing/>
      <Food/>
      <Footer/>
    </>
  );
};

export default Home;
