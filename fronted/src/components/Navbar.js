import React, { useState } from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
import Burgerlogo from "../assets/burgerlogo1.png";
import Userlogo from "../assets/userlogo.png";
import Cartlogo from "../assets/shopping-cart.png";
import Whishlistlogo from "../assets/wishlist.png";
import Formmodel from './Formmodel';

const Navbar = () => {
    const [openModal, setOpenModal] = useState(false);
  return (
    <>
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
                <a href="/whishlist">
                  <img src={Whishlistlogo} alt="" className="w-10" />
                </a>
              </li>
              <li>
                <a href="/cart">
                  <img src={Cartlogo} alt="" className="w-10" />
                </a>
              </li>
              <li
                onClick={() => {
                  setOpenModal(!openModal);
                }}
              >
                <img src={Userlogo} alt="" className="w-10" />
              </li>
            </ul>
          </div>
        </div>
        <Formmodel openModal={openModal} setOpenModal={setOpenModal}/>
    </>
  )
}

export default Navbar
