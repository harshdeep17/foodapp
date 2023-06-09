import React from "react";
import Homeburgerimage from "../assets/homeburger.png";
import Navbar from "./Navbar";

const Burger_Landing = () => {
  
  return (
    <>
      <div className="bg-yellow-500  bg-opacity-80 relative overflow-auto ">
       <Navbar />
        <div className="grid grid-cols-1 sm:grid-cols-2 mt-8 sm:py-4">
          <div className="sm:my-auto">
            <h1 className="text-center text-white font-serif font-bold sm:text-5xl text-3xl">
              Enjoy Our
            </h1>
            <h1 className="text-center text-white font-serif font-bold text-3xl">
              Delicious Burger
            </h1>
            <p className=" py-8  px-4 text-center  font-semibold text-white">
              Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu
              diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet
              lorem sit clita duo justo magna dolore erat ame
              t
            </p>
            <div className="flex justify-center gap-x-4">
              <input
                type="text"
                placeholder="Pincode"
                className="border-2 border-red-500 rounded-md p-2 outline-none"
              />
              <button className="text-white bg-red-500 rounded-md px-4 py-2">
                check
              </button>
            </div>
          </div>
          <div className="px-4 mt-4 sm:px-0 sm:mt-0 sm:mx-auto">
            <img src={Homeburgerimage} className="sm:w-96" alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Burger_Landing;
