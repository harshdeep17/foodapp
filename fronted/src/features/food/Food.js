import React, { useEffect, useState } from 'react'
import { fetchfoodAsync } from './foodSlice'
import { useDispatch, useSelector } from 'react-redux';
import Spinnerfoodmenu from '../../components/Spinnerfoodmenu';
import Foodcard from '../../components/Foodcard';

const Food = () => {
  const [foodCategory, setFoodCategory] = useState("all");

  const dispatch = useDispatch();
  const state = useSelector((state)=>state.food);
  const foodData = state.foods;
  const isfooddataloading = state.status;

  // console.log(isfooddataloading);
  // console.log(state.foods);
  
  useEffect(()=>{
      dispatch(fetchfoodAsync(foodCategory));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[foodCategory])

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
          <div onClick={(e)=>setFoodCategory(e.target.textContent)} className={`bg-transparent px-4 py-2    rounded-md 
              ${foodCategory === 'all'? "bg-yellow-500 text-white" : "border-yellow-500 border-2 text-yellow-500"}`}>all</div>
          <div onClick={(e)=>setFoodCategory(e.target.textContent)} className={`bg-transparent px-4 py-2    rounded-md 
              ${foodCategory === 'food'? "bg-yellow-500 text-white" : "border-yellow-500 border-2 text-yellow-500"}`}>food</div>
          <div onClick={(e)=>setFoodCategory(e.target.textContent)} className={`bg-transparent px-4 py-2    rounded-md 
              ${foodCategory === 'snacks'? "bg-yellow-500 text-white" : "border-yellow-500 border-2 text-yellow-500"}`}>snacks</div>
          <div onClick={(e)=>setFoodCategory(e.target.textContent)} className={`bg-transparent px-4 py-2    rounded-md 
              ${foodCategory === 'beverages'? "bg-yellow-500 text-white" : "border-yellow-500 border-2 text-yellow-500"}`}>beverages</div>
        </div>
        <div className="mt-4 grid grid-cols-1  md:mx-8  gap-y-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        { 
          !isfooddataloading ? <Spinnerfoodmenu/> :
          foodData.map((currEle, index)=>{
            return(  
              <Foodcard fooddata={currEle} id={currEle.__id}/>
            )
          })
        }
        </div>
      </div>
    </>
  )
}

export default Food
