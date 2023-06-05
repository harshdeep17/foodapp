/* eslint-disable react/jsx-pascal-case */
import React from "react";
import Burger_Landing from "../components/Burger_Landing";
import Foodmenu from "../components/Foodmenu";

const Home = () => {
  return (
    <>
      <Burger_Landing />
      <Foodmenu/>
      <div className="grid md:grid-cols-5 sm:grid-cols-2 px-8 py-8 gap-y-3 grid-cols-1 text-white bg-stone-950">
        <div className="col-span-2">
          <h1 className="font-bold pb-2">About the company</h1>
          <p className="text-sm"> Ut congue augue non tellus bibendum, in varius tellus condimentum. In scelerisque nibh tortor, sed rhoncus odio condimentum in. Sed sed est ut sapien ultrices eleifend. Integer tellus est, vehicula eu lectus tincidunt, ultricies feugiat leo. Suspendisse tellus elit, pharetra in hendrerit ut, aliquam quis augue. Nam ut nibh mollis, tristique ante sed, viverra massa. </p>
        </div>
        <div>
          <ul className="mx-auto px-4">
            <li> Street name and number</li>
            <li> City, Country </li>
            <li>(+00) 0000 000 000 </li>
            <li> yummuyburger@gmail.com </li>
          </ul>
        </div>
        <div className="md:col-span-2 mx-auto">
          <ul>
            <li><img src="https://yummyburger.ml/images/burgerlogonaem.png" alt="" className="w-40" /></li>
            <li>
              <ul className="flex">
              <li><a href="/">Home | </a></li>
              <li><a href="/">About | </a></li>
              <li><a href="/">Services</a></li>
              </ul>
            </li>
            <li>YUMMY BURGER © 2022</li>
          </ul>
        </div>

      </div>
    </>
  );
};

export default Home;
