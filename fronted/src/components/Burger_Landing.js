import React from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
import Burgerlogo from "../assets/burgerlogo1.png";
import Userlogo from "../assets/userlogo.png";
import Cartlogo from "../assets/shopping-cart.png";
import Whishlistlogo from "../assets/wishlist.png";
import Homeburgerimage from "../assets/homeburger.png";

const Burger_Landing = () => {
  return (
    <>
      <div className="bg-yellow-500">
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
          </div> 
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
              <li>
                <img src={Userlogo} alt="" className="w-10" />
              </li>
            </ul>
          </div>
        </div> 
        <div className="grid grid-cols-1 sm:grid-cols-2 mt-8 sm:py-4">
          <div className="sm:my-auto">
            <h1 className="text-center text-white font-serif font-bold sm:text-5xl text-3xl">Enjoy Our</h1>
            <h1 className="text-center text-white font-serif font-bold text-3xl">Delicious Burger</h1>
            <p className=" py-8  px-4 text-center  font-semibold text-white">
              Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu
              diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet
              lorem sit clita duo justo magna dolore erat amet
            </p>
            <div className="flex justify-center gap-x-4">
              <input type="text" placeholder="Pincode" className="border-2 border-red-500 rounded-md p-2 outline-none"/>
              <button className="text-white bg-red-500 rounded-md px-4 py-2">check</button>
            </div>
          </div>
          <div className="px-4 mt-4 sm:px-0 sm:mt-0 sm:mx-auto">
            <img src={Homeburgerimage} className="sm:w-96" alt="" />
          </div>
        </div>
      </div>
    </>
  )
}

export default Burger_Landing
