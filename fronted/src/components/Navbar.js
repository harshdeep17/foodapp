import React, { useEffect, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import Burgerlogo from "../assets/burgerlogo1.png";
import Userlogo from "../assets/userlogo.png";
import Cartlogo from "../assets/shopping-cart.png";
import Whishlistlogo from "../assets/wishlist.png";
import {  toast } from "react-toastify";
import Formmodel from "./Formmodel";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../features/auth/authSlice";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [openModal, setOpenModal] = useState(false);
  const [currUser, serCurrUser] = useState({});

  const dispatch = useDispatch();
  const reduxState = useSelector((state)=> state.auth);

  const toastOptions = {
    position: "bottom-right",
    autoClose: 8000,
    pauseOnHover: true,
    draggable: true,
    theme: "dark",
  };

  const handleModal = ()=>{
    // console.log(reduxState.logoutStatus);
      if(reduxState.logoutStatus)
        setOpenModal(!openModal)
      else{
        dispatch(logoutUser());
        toast.error("You are logged out", toastOptions);
      }
    };

  useEffect(()=>{
    if(reduxState.status === 'idle'){
      serCurrUser(reduxState.currUser);
    }
  }, [reduxState])

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
        <Link to="/"> 
          <img src={Burgerlogo} className="w-20  object-cover" alt="" />
        </Link>
        </div>
        <div>
          <ul className="flex items-center gap-x-3 sm:gap-x-8">
            <li>
              <Link to="/whishlist">
                <img src={Whishlistlogo} alt="" className="w-10" />
              </Link>
            </li>
            <li>
              <Link to="/cart">
                <img src={Cartlogo} alt="" className="w-10" />
              </Link>
            </li>
            <li onClick={handleModal}>
              <img src={Userlogo} alt="" className="w-10 mx-auto"/>
              <h1>{currUser.username}</h1>
            </li>
          </ul>
        </div>
      </div>
      <Formmodel openModal={openModal} setOpenModal={setOpenModal} />
    </>
  );
};

export default Navbar;
