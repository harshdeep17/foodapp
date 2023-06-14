import React, { useEffect, useState } from 'react'
import add_cart from "../assets/cart.png";  
import { useDispatch, useSelector } from "react-redux";
import {useNavigate} from "react-router-dom"
import {  toast } from "react-toastify";
import { addItemAsync } from '../features/cart/cartSlice';

const Foodcard = ({fooddata}) => {

  const dispatch = useDispatch();
  const reduxState = useSelector((state)=> state.auth);
  const navigate = useNavigate();

  const [currUser, serCurrUser] = useState({});
  const [isCurrUser, setIsCurrUser] = useState(false);
  const {description, name, price, imageUrl, category, _id:foodId } = fooddata; 

  const toastOptions = {
    position: "bottom-right",
    autoClose: 8000,
    pauseOnHover: true,
    draggable: true,
    theme: "dark",
  };

  const handleCart=()=>{
    console.log(isCurrUser);
    if(isCurrUser){
      dispatch(addItemAsync({userId: currUser._id, foodProductId: foodId}));
    
      // navigate("/cart");
    }
    else{
      toast.error("You need to Log In", toastOptions);
    }
  }

  useEffect(()=>{
    if(reduxState.status === 'idle'){
      serCurrUser(reduxState.currUser);
      setIsCurrUser(true);
    }
  }, [reduxState])

  return (
    <>
      <div className="border-stone-700 mx-auto w-80 sm:w-60 border-4 rounded-lg">
            <div className="flex justify-center bg-stone-700 rounded-md hover:bg-yellow-500  transition-transform duration-500   py-4 m-2  items-center">
                <img src={`https://yummyburger.ml/${imageUrl[0]}`}
                className="w-48  lg:w-56" alt="" />
              </div>
            <div className="px-4 ">
              <h1 className="text-xl font-sans font-bold">{name}</h1>
              <p className="">{description}</p>
            </div>
            <ul className="flex px-4 py-2 justify-between items-center">
              <li><span><img src="" alt="" /></span>{price}</li>
              <li><img src={add_cart} onClick={handleCart}
               className="w-10" alt=""   /></li>
            </ul>
          </div>
    </>
  )
}

export default Foodcard
