import React from 'react'
import add_cart from "../assets/cart.png"; 

const Foodmenu = () => {
  return (
    <>
      <div className="bg-stone-950  text-white">
        <div className="py-8 sm:py-16">
          <h1 className="text-center pb-4"><span className="border-yellow-500 text-2xl font-serif font-bold border-b-2">OUR BEST MENU</span></h1>
          <p className="text-center font-light px-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
            animi inventore dolores ab reiciendis aliquid aspernatur, magnam
            sit.
          </p>
        </div>
        <div className="flex justify-center  flex-wrap gap-x-4 gap-y-2">
          <div className="bg-transparent px-4 py-2 border-2 border-yellow-500 hover:bg-yellow-500 hover:text-white text-yellow-500 rounded-md">all</div>
          <div className="bg-transparent px-4 py-2 border-2 border-yellow-500 hover:bg-yellow-500 hover:text-white text-yellow-500 rounded-md">food</div>
          <div className="bg-transparent px-4 py-2 border-2 border-yellow-500 hover:bg-yellow-500 hover:text-white text-yellow-500 rounded-md">snacks</div>
          <div className="bg-transparent px-4 py-2 border-2 border-yellow-500 hover:bg-yellow-500 hover:text-white text-yellow-500 rounded-md">beverages</div>
        </div>
        <div className="mt-4 grid grid-cols-1 md:mx-8  gap-y-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          <div className="border-stone-700 mx-auto w-80 sm:w-60 border-4 rounded-lg">
            <div className="flex justify-center bg-stone-700 rounded-md hover:bg-yellow-500  transition-transform duration-500   py-4 m-2  items-center">
                <img src="https://yummyburger.ml//uploads/image_7d139692-90ad-4853-92a3-8b2269999e4e.png" 
                className="w-48  lg:w-56" alt="" />
              </div>
            <div className="px-4 ">
              <h1 className="text-xl font-sans font-bold">CHICKEN BURGER</h1>
              <p className="">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita, tenetur ullam asperiores quod illo officia commodi doloremque sit nemo molestiae.</p>
            </div>
            <ul className="flex px-4 py-2 justify-between items-center">
              <li><span><img src="" alt="" /></span>159</li>
              <li><img src={add_cart} className="w-10" alt="" /></li>
            </ul>
          </div>
          <div className="border-stone-700 mx-auto w-80 sm:w-60 border-4 rounded-lg">
            <div className="flex justify-center bg-stone-700 rounded-md hover:bg-yellow-500  transition-transform duration-500   py-4 m-2  items-center">
                <img src="https://yummyburger.ml//uploads/image_7d139692-90ad-4853-92a3-8b2269999e4e.png" 
                className="w-48  lg:w-56" alt="" />
              </div>
            <div className="px-4 ">
              <h1 className="text-xl font-sans font-bold">CHICKEN BURGER</h1>
              <p className="">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita, tenetur ullam asperiores quod illo officia commodi doloremque sit nemo molestiae.</p>
            </div>
            <ul className="flex px-4 py-2 justify-between items-center">
              <li><span><img src="" alt="" /></span>159</li>
              <li><img src={add_cart} className="w-10" alt="" /></li>
            </ul>
          </div>
          <div className="border-stone-700 mx-auto w-80 sm:w-60 border-4 rounded-lg">
            <div className="flex justify-center bg-stone-700 rounded-md hover:bg-yellow-500  transition-transform duration-500   py-4 m-2  items-center">
                <img src="https://yummyburger.ml//uploads/image_7d139692-90ad-4853-92a3-8b2269999e4e.png" 
                className="w-48  lg:w-56" alt="" />
              </div>
            <div className="px-4 ">
              <h1 className="text-xl font-sans font-bold">CHICKEN BURGER</h1>
              <p className="">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita, tenetur ullam asperiores quod illo officia commodi doloremque sit nemo molestiae.</p>
            </div>
            <ul className="flex px-4 py-2 justify-between items-center">
              <li><span><img src="" alt="" /></span>159</li>
              <li><img src={add_cart} className="w-10" alt="" /></li>
            </ul>
          </div>
          <div className="border-stone-700 mx-auto w-80 sm:w-60 border-4 rounded-lg">
            <div className="flex justify-center bg-stone-700 rounded-md hover:bg-yellow-500  transition-transform duration-500   py-4 m-2  items-center">
                <img src="https://yummyburger.ml//uploads/image_7d139692-90ad-4853-92a3-8b2269999e4e.png" 
                className="w-48  lg:w-56" alt="" />
              </div>
            <div className="px-4 ">
              <h1 className="text-xl font-sans font-bold">CHICKEN BURGER</h1>
              <p className="">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita, tenetur ullam asperiores quod illo officia commodi doloremque sit nemo molestiae.</p>
            </div>
            <ul className="flex px-4 py-2 justify-between items-center">
              <li><span><img src="" alt="" /></span>159</li>
              <li><img src={add_cart} className="w-10" alt="" /></li>
            </ul>
          </div>
          
        </div>
      </div>
    </>
  )
}

export default Foodmenu
