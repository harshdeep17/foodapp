const Food = require('../models/food.model');

module.exports.foodmenu = async (req, res, next)=>{
    try{
        const allfood = await Food.find();
        // console.log(allfood);

        return res.status(201).json(allfood);
    } catch (error) {
        // console.log(error);
        return res.status(500).json("msg", error);
    }
}

module.exports.foodproduct = async (req, res, next)=>{
    try{
        const foodId = req.params.foodId;
        // const ObjectId = require('mongodb').ObjectId; 
        // const foodObjectID = new ObjectId(foodId);

        // console.log(foodObjectID);
        const foodProduct = await Food.findOne({ _id: foodId})
        .catch((err)=>{
            console.error(err);
        })
        console.log(foodProduct);
        
        return res.status(200).json(foodProduct);
    } catch (error) {
        console.log(error);

    }

} 