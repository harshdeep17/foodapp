const Food = require('../models/food.model');
const mongoose = require('mongoose');

module.exports.foodmenu = async (req, res, next)=>{
    try{
        const category = req.params.category;
        const allfood = await Food.find();
        // const allfood = JSON.parse(res);
        // console.log(allfood);
        if(category === "all"){
            return res.status(201).json(allfood);
        }
        else{
            const food_by_category = allfood.filter(food => food.toJSON().food_type === category)
            return res.status(201).json(food_by_category);
        }
    } catch (error) {
        // console.log(error);
        return res.status(500).json("msg", error);
    }
}

module.exports.foodproduct = async (req, res, next)=>{
    try{
        const foodId = req.params.id;

        const foodProduct = await Food.find({_id: new mongoose.Types.ObjectId(foodId)})
        
        // console.log(foodProduct);
        
        return res.status(201).json({foodProduct: foodProduct, msg: "successfully fetched"});
    } catch (error) {
        console.log(error);
    }

} 
