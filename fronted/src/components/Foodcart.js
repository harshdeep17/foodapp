import React from 'react'
import add_cart from "../assets/cart.png";  

const Foodcart = ({fooddata}) => {
    const {food_desc, food_name, food_price, img_urls, __id } = fooddata; 

  return (
    <>
      <div className="border-stone-700 mx-auto w-80 sm:w-60 border-4 rounded-lg">
            <div className="flex justify-center bg-stone-700 rounded-md hover:bg-yellow-500  transition-transform duration-500   py-4 m-2  items-center">
                <img src={`https://yummyburger.ml/${img_urls[0]}`}
                className="w-48  lg:w-56" alt="" />
              </div>
            <div className="px-4 ">
              <h1 className="text-xl font-sans font-bold">{food_name}</h1>
              <p className="">{food_desc}</p>
            </div>
            <ul className="flex px-4 py-2 justify-between items-center">
              <li><span><img src="" alt="" /></span>{food_price}</li>
              <li><img src={add_cart} className="w-10" alt="" /></li>
            </ul>
          </div>
    </>
  )
}

export default Foodcart
