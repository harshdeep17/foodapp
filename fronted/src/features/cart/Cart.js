/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchItemAsync, removeItemAsync, updateItemAsync } from './cartSlice';
import Navbar from '../../components/Navbar';
import closeYellowIcon from "../../assets/closeYellowIcon.png"
import { loginUserAsync } from '../auth/authSlice';

const Cart = () => {
  
  const dispatch = useDispatch();
  const reduxCartState = useSelector((state)=>state.cart);
  // console.log(reduxCartState);
  const reduxAuthState = useSelector((state)=> state.auth);
  console.log("reduxAuthState",reduxAuthState);

  const [cartItems, setCartItems] = useState();
  const [currUser, serCurrUser] = useState({});
  const [isCurrUser, setIsCurrUser] = useState(false);
  const [number, setNumber] = useState(1);

  const cartItemsArray = reduxCartState.items;
  console.log(cartItemsArray);

  useEffect(()=>{
    if(reduxAuthState.status === "idle"){
      // console.log("useeffect reduxAuthState");
      serCurrUser(reduxAuthState.currUser);
      setIsCurrUser(true);
    }
  }, [reduxAuthState]);

  useEffect(()=>{
    if(isCurrUser){
      dispatch(fetchItemAsync(currUser._id));
    }
  },[currUser])

  const handleCartQuantity = (e, currentQuantity, foodId)=>{
      if(e.target.textContent==="+"){
        dispatch(updateItemAsync({userId: currUser._id, foodProductId:foodId, updatedFoodObject: {"quantity": currentQuantity+1}}));
      }
      else{
        dispatch(updateItemAsync({userId: currUser._id, foodProductId:foodId, updatedFoodObject: {"quantity": currentQuantity-1}}));
      }
  }

  const fun = (foodId)=>{
    console.log("click");
    dispatch(removeItemAsync({userId: currUser._id, foodProductId:foodId}));
  }

  return (
    <>
    <div className='h-screen bg-slate-800'>
      <h1 className='text-white text-2xl px-8 py-4'>Woo hoo! let`s complete your order, shall we?</h1>
      <div className='grid grid-cols-3 mx-20 gap-x-5  h-4/5'>
        <div className='col-span-2 flex-col row-span-6 mt-4 space-y-4 h-3/4 overflow-auto'>
        {
          cartItemsArray.map((Item)=>{
            const {_id: foodId, name, description, price, category, imageUrl} = Item.food;
            return (
              <div className='grid grid-cols-7 border-b-2 border-stone-700 pb-4'>
            <div className='flex justify-center items-center'>
              <img src={`https://yummyburger.ml/${imageUrl[0]}`} alt="" className='h-20 object-cover' />
            </div>
            <div className='col-span-3 px-3'>
              <h1 className='font-bold text-white text-xl font-sans'>{name}</h1>
              <h2 className='text-yellow-500 text-lg'>$ {price}</h2>
              <p className='text-white text-sm'>{description}</p>
            </div>
            <div className='flex items-center justify-center'>
              <h1 className='text-yellow-500 text-2xl'>$ {price * Item.quantity}</h1>
            </div>
            <div className='flex items-center justify-center'>
              <ul className='bg-stone-800 text-2xl text-yellow-500'>
                <li className='rounded-full text-center ring-2 cursor-pointer' onClick={(e)=>handleCartQuantity(e, Item.quantity, foodId)}>+</li>
                <li className='text-center px-4 py-2'>{Item.quantity}</li>
                <li className='rounded-full text-center ring-2 cursor-pointer' onClick={(e)=>handleCartQuantity(e, Item.quantity, foodId)}>-</li>
              </ul>
            </div>
            <div className='flex justify-center items-center cursor-pointer' onClick={()=>fun(foodId)}>
              <img src={closeYellowIcon} alt=""  className='w-12'/>
            </div>
        </div>)
          })
        }
        </div>
        <ul className='bg-stone-900  flex-col py-8 space-y-8 '>
          <li className='flex justify-center'> 
          <input type="text" className='bg-transparent p-2 border-2 border-black focus:border-yellow-500 text-white  outline-none rounded-lg' 
            placeholder='Enter Your Coupen'/> </li>
          <li><h1 className='text-xl text-center text-white '>Subtotal (2 items): $ 597</h1></li>
          <li className='flex justify-center'>
          <button className='px-4 py-2 text-black text-2xl bg-yellow-500 rounded-md'>Prodessed To Buy</button>
          </li>
         </ul>
      </div>
    </div>
    </>
    )
}

export default Cart
