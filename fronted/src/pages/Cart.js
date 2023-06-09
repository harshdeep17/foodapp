import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import closeYellowIcon from "../assets/closeYellowIcon.png";
import HomeburgerImage from "../assets/homeburger.png";

const Cart = () => {
  const [number, setNumber] = useState(1);
  return (
    <>
      <Navbar/>
    <div className='h-screen bg-slate-800'>
      <h1 className='text-white text-2xl px-8 py-4'>Woo hoo! let`s complete your order, shall we?</h1>
      <div className='grid grid-cols-3 mx-20 h-4/5'>
        <div className='col-span-2 flex-col row-span-6 mt-4 space-y-4 h-3/4 overflow-auto'>
          <div className='grid grid-cols-7 border-b-2 border-stone-700 pb-4'>
              <div className='flex justify-center items-center'>
                <img src={HomeburgerImage} alt="" />
              </div>
              <div className='col-span-3 px-3'>
                <h1 className='font-bold text-white text-xl font-sans'>DOUBLE MAC BURGER</h1>
                <h2 className='text-yellow-500 text-lg'>$ 279</h2>
                <p className='text-white text-sm'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              </div>
              <div className='flex items-center justify-center'>
                <h1 className='text-yellow-500 text-2xl'>$ 279</h1>
              </div>
              <div className='flex items-center justify-center'>
                <ul className='bg-stone-800 text-2xl text-yellow-500'>
                  <li className='rounded-full text-center ring-2 ' onClick={()=>{setNumber(number+1)}}>+</li>
                  <li className='text-center px-4 py-2'>{number}</li>
                  <li className='rounded-full text-center ring-2' onClick={()=>{setNumber(number-1)}}>-</li>
                </ul>
              </div>
              <div className='flex justify-center items-center'>
                <img src={closeYellowIcon} alt="" className='w-12'/>
              </div>
          </div>
          <div className='grid grid-cols-7 border-b-2 border-stone-700 pb-4'>
              <div className='flex justify-center items-center'>
                <img src={HomeburgerImage} alt="" />
              </div>
              <div className='col-span-3 px-3'>
                <h1 className='font-bold text-white text-xl font-sans'>DOUBLE MAC BURGER</h1>
                <h2 className='text-yellow-500 text-lg'>$ 279</h2>
                <p className='text-white text-sm'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              </div>
              <div className='flex items-center justify-center'>
                <h1 className='text-yellow-500 text-2xl'>$ 279</h1>
              </div>
              <div className='flex items-center justify-center'>
                <ul className='bg-stone-800 text-2xl text-yellow-500'>
                  <li className='rounded-full text-center ring-2 ' onClick={()=>{setNumber(number+1)}}>+</li>
                  <li className='text-center px-4 py-2'>{number}</li>
                  <li className='rounded-full text-center ring-2' onClick={()=>{setNumber(number-1)}}>-</li>
                </ul>
              </div>
              <div className='flex justify-center items-center'>
                <img src={closeYellowIcon} alt="" className='w-12'/>
              </div>
          </div>
          <div className='grid grid-cols-7 border-b-2 border-stone-700 pb-4'>
              <div className='flex justify-center items-center'>
                <img src={HomeburgerImage} alt="" />
              </div>
              <div className='col-span-3 px-3'>
                <h1 className='font-bold text-white text-xl font-sans'>DOUBLE MAC BURGER</h1>
                <h2 className='text-yellow-500 text-lg'>$ 279</h2>
                <p className='text-white text-sm'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              </div>
              <div className='flex items-center justify-center'>
                <h1 className='text-yellow-500 text-2xl'>$ 279</h1>
              </div>
              <div className='flex items-center justify-center'>
                <ul className='bg-stone-800 text-2xl text-yellow-500'>
                  <li className='rounded-full text-center ring-2 ' onClick={()=>{setNumber(number+1)}}>+</li>
                  <li className='text-center px-4 py-2'>{number}</li>
                  <li className='rounded-full text-center ring-2' onClick={()=>{setNumber(number-1)}}>-</li>
                </ul>
              </div>
              <div className='flex justify-center items-center'>
                <img src={closeYellowIcon} alt="" className='w-12'/>
              </div>
          </div>
          <div className='grid grid-cols-7 border-b-2 border-stone-700 pb-4'>
              <div className='flex justify-center items-center'>
                <img src={HomeburgerImage} alt="" />
              </div>
              <div className='col-span-3 px-3'>
                <h1 className='font-bold text-white text-xl font-sans'>DOUBLE MAC BURGER</h1>
                <h2 className='text-yellow-500 text-lg'>$ 279</h2>
                <p className='text-white text-sm'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              </div>
              <div className='flex items-center justify-center'>
                <h1 className='text-yellow-500 text-2xl'>$ 279</h1>
              </div>
              <div className='flex items-center justify-center'>
                <ul className='bg-stone-800 text-2xl text-yellow-500'>
                  <li className='rounded-full text-center ring-2 ' onClick={()=>{setNumber(number+1)}}>+</li>
                  <li className='text-center px-4 py-2'>{number}</li>
                  <li className='rounded-full text-center ring-2' onClick={()=>{setNumber(number-1)}}>-</li>
                </ul>
              </div>
              <div className='flex justify-center items-center'>
                <img src={closeYellowIcon} alt="" className='w-12'/>
              </div>
          </div>
          <div className='grid grid-cols-7 border-b-2 border-stone-700 pb-4'>
              <div className='flex justify-center items-center'>
                <img src={HomeburgerImage} alt="" />
              </div>
              <div className='col-span-3 px-3'>
                <h1 className='font-bold text-white text-xl font-sans'>DOUBLE MAC BURGER</h1>
                <h2 className='text-yellow-500 text-lg'>$ 279</h2>
                <p className='text-white text-sm'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              </div>
              <div className='flex items-center justify-center'>
                <h1 className='text-yellow-500 text-2xl'>$ 279</h1>
              </div>
              <div className='flex items-center justify-center'>
                <ul className='bg-stone-800 text-2xl text-yellow-500'>
                  <li className='rounded-full text-center ring-2 ' onClick={()=>{setNumber(number+1)}}>+</li>
                  <li className='text-center px-4 py-2'>{number}</li>
                  <li className='rounded-full text-center ring-2' onClick={()=>{setNumber(number-1)}}>-</li>
                </ul>
              </div>
              <div className='flex justify-center items-center'>
                <img src={closeYellowIcon} alt="" className='w-12'/>
              </div>
          </div>
          <div className='grid grid-cols-7 border-b-2 border-stone-700 pb-4'>
              <div className='flex justify-center items-center'>
                <img src={HomeburgerImage} alt="" />
              </div>
              <div className='col-span-3 px-3'>
                <h1 className='font-bold text-white text-xl font-sans'>DOUBLE MAC BURGER</h1>
                <h2 className='text-yellow-500 text-lg'>$ 279</h2>
                <p className='text-white text-sm'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              </div>
              <div className='flex items-center justify-center'>
                <h1 className='text-yellow-500 text-2xl'>$ 279</h1>
              </div>
              <div className='flex items-center justify-center'>
                <ul className='bg-stone-800 text-2xl text-yellow-500'>
                  <li className='rounded-full text-center ring-2 ' onClick={()=>{setNumber(number+1)}}>+</li>
                  <li className='text-center px-4 py-2'>{number}</li>
                  <li className='rounded-full text-center ring-2' onClick={()=>{setNumber(number-1)}}>-</li>
                </ul>
              </div>
              <div className='flex justify-center items-center'>
                <img src={closeYellowIcon} alt="" className='w-12'/>
              </div>
          </div>
        
        </div>
        <div className=''>
        <ul className='bg-stone-900  flex-col py-8 space-y-8 '>
          <li className='flex justify-center'> 
          <input type="text" className='bg-transparent p-2 border-2 border-black focus:border-yellow-500 text-white cursor-pointer outline-none rounded-lg' 
            placeholder='Enter Your Coupen'/> </li>
          <li><h1 className='text-xl text-center text-white '>Subtotal (2 items): $ 597</h1></li>
          <li className='flex justify-center'>
          <button className='px-4 py-2 text-black  texxt-2xl bg-yellow-500 rounded-md'>Prodessed To Buy</button>
          </li>
         </ul>
        </div>
        
      </div>
    </div>
    </>
  )
}

export default Cart
