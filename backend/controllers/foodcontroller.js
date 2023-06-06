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