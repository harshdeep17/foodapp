/* eslint-disable no-unused-vars */
import React from 'react'
import Spinnerfoodmenu from './Spinnerfoodmenu';
import Foodcart from './Foodcart';

const Foodmenu = ({foodData, setFoodCategory, isfooddataloading, setFooddataloading}) => {

  console.log(foodData);

  const updatefoodcategory =(e)=>{
    // console.log('foodmenu', e.target.value);
    setFoodCategory(e.target.textContent);
    setFooddataloading(true);
  }

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
          <div onClick={updatefoodcategory} className="bg-transparent px-4 py-2 border-2 border-yellow-500 hover:bg-yellow-500 hover:text-white text-yellow-500 rounded-md">all</div>
          <div onClick={updatefoodcategory} className="bg-transparent px-4 py-2 border-2 border-yellow-500 hover:bg-yellow-500 hover:text-white text-yellow-500 rounded-md">food</div>
          <div onClick={updatefoodcategory} className="bg-transparent px-4 py-2 border-2 border-yellow-500 hover:bg-yellow-500 hover:text-white text-yellow-500 rounded-md">snacks</div>
          <div onClick={updatefoodcategory} className="bg-transparent px-4 py-2 border-2 border-yellow-500 hover:bg-yellow-500 hover:text-white text-yellow-500 rounded-md">beverages</div>
        </div>
        <div className="mt-4 grid grid-cols-1  md:mx-8  gap-y-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        { 
          isfooddataloading ? <Spinnerfoodmenu/> :
          foodData.map((currEle, index)=>{
            return(
              <Foodcart fooddata={currEle} id={currEle.__id}/>
            )
          })
        }
        </div>
      </div>
    </>
  )
}

export default Foodmenu
