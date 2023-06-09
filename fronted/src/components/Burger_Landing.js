<<<<<<< HEAD
import React, { useState } from "react";
=======
import React from 'react'
>>>>>>> 9421e6e42c3641ffc0552358ee3d81ffd657854c
import { GiHamburgerMenu } from "react-icons/gi";
import Burgerlogo from "../assets/burgerlogo1.png";
import Userlogo from "../assets/userlogo.png";
import Cartlogo from "../assets/shopping-cart.png";
import Whishlistlogo from "../assets/wishlist.png";
import Homeburgerimage from "../assets/homeburger.png";
<<<<<<< HEAD
import Formmodel from "./Formmodel";

const Burger_Landing = () => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <div className="bg-yellow-500  bg-opacity-80 relative overflow-auto ">
       <Formmodel openModal={openModal} setOpenModal={setOpenModal}/>
=======

const Burger_Landing = () => {
  return (
    <>
      <div className="bg-yellow-500">
>>>>>>> 9421e6e42c3641ffc0552358ee3d81ffd657854c
        <div className="flex bg-opacity-50 z-10   bg-cyan-600 justify-between items-center px-6 py-4 sm:px-12">
          <div className="text-2xl sm:text-4xl relative">
            <GiHamburgerMenu />
            <div className="bg-pink-600 hidden top-8 absolute">
              <ul className="">
                <li>profile</li>
                <li>about</li>
                <li>home</li>
              </ul>
            </div>
<<<<<<< HEAD
          </div>
=======
          </div> 
>>>>>>> 9421e6e42c3641ffc0552358ee3d81ffd657854c
          <div>
            <img src={Burgerlogo} className="w-20  object-cover" alt="" />
          </div>
          <div>
            <ul className="flex items-center gap-x-3 sm:gap-x-8">
              <li>
                <a href="/cart">
                  <img src={Whishlistlogo} alt="" className="w-10" />
                </a>
              </li>
              <li>
                <a href="/whishlist">
                  <img src={Cartlogo} alt="" className="w-10" />
                </a>
              </li>
<<<<<<< HEAD
              <li
                onClick={() => {
                  setOpenModal(!openModal);
                }}
              >
=======
              <li>
>>>>>>> 9421e6e42c3641ffc0552358ee3d81ffd657854c
                <img src={Userlogo} alt="" className="w-10" />
              </li>
            </ul>
          </div>
<<<<<<< HEAD
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 mt-8 sm:py-4">
          <div className="sm:my-auto">
            <h1 className="text-center text-white font-serif font-bold sm:text-5xl text-3xl">
              Enjoy Our
            </h1>
            <h1 className="text-center text-white font-serif font-bold text-3xl">
              Delicious Burger
            </h1>
=======
        </div> 
        <div className="grid grid-cols-1 sm:grid-cols-2 mt-8 sm:py-4">
          <div className="sm:my-auto">
            <h1 className="text-center text-white font-serif font-bold sm:text-5xl text-3xl">Enjoy Our</h1>
            <h1 className="text-center text-white font-serif font-bold text-3xl">Delicious Burger</h1>
>>>>>>> 9421e6e42c3641ffc0552358ee3d81ffd657854c
            <p className=" py-8  px-4 text-center  font-semibold text-white">
              Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu
              diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet
              lorem sit clita duo justo magna dolore erat amet
            </p>
            <div className="flex justify-center gap-x-4">
<<<<<<< HEAD
              <input
                type="text"
                placeholder="Pincode"
                className="border-2 border-red-500 rounded-md p-2 outline-none"
              />
              <button className="text-white bg-red-500 rounded-md px-4 py-2">
                check
              </button>
=======
              <input type="text" placeholder="Pincode" className="border-2 border-red-500 rounded-md p-2 outline-none"/>
              <button className="text-white bg-red-500 rounded-md px-4 py-2">check</button>
>>>>>>> 9421e6e42c3641ffc0552358ee3d81ffd657854c
            </div>
          </div>
          <div className="px-4 mt-4 sm:px-0 sm:mt-0 sm:mx-auto">
            <img src={Homeburgerimage} className="sm:w-96" alt="" />
          </div>
        </div>
      </div>
    </>
<<<<<<< HEAD
  );
};

export default Burger_Landing;
=======
  )
}

export default Burger_Landing
>>>>>>> 9421e6e42c3641ffc0552358ee3d81ffd657854c
