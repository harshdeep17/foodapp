const Cart = require('../models/cart.model');
const mongoose = require('mongoose');
const { foodproduct } = require('./foodcontroller');

const isEmpty = (obj)=>JSON.stringify(obj) === '{}';

module.exports.addItem = async (req, res, next)=>{
    try{
        const {userId, foodProductId} = req.body;
        let msg = "";

        const exitingUserCart = await Cart.findOne({user: new mongoose.Types.ObjectId(userId)})
                                .populate("user").populate("items.food");
                                
        // console.log("exitingcart",exitingUserCart);
        if(exitingUserCart !== null){
            
            // console.log("alll food product in cart",exitingUserCart.items[0].food._id.toString());
            const foodProductArray = exitingUserCart.items.filter((foodProduct)=>foodProduct.toJSON().food._id.toString()===foodProductId);
            // console.log(foodProductArray.length);
            if(foodProductArray.length >= 1){
                msg = "food is already added into cart";
                return res.status(201).json({cart: exitingUserCart, msg: msg});
            }
            exitingUserCart.items.push({food: new mongoose.Types.ObjectId(foodProductId), quantity: "1"});
            await exitingUserCart.save();
            msg="Cart updated successfully";
        }
        else{
            const cart = new Cart({
                    user: new mongoose.Types.ObjectId(userId),
                    items: [{food: new mongoose.Types.ObjectId(foodProductId), quantity: "1"}],
                  });
            await cart.save();
            msg = "added new cart with foodItem successfully";
        }
        
        const userCart = await Cart.findOne({user: new mongoose.Types.ObjectId(userId)}).populate("user").populate("items.food");
        // console.log(userCart);
        return res.status(201).json({cart: userCart, msg: msg});

    } catch (error) {
        console.log(error);
        return res.status(500).json({"msg": error});
    }
}

module.exports.fetchItems = async (req, res, next)=>{
    try{
        const userId = req.params.userId;
        const cartProduct = await Cart.findOne({user: new mongoose.Types.ObjectId(userId)}).populate("user").populate("items.food");

        return res.status(201).json({cart: cartProduct, msg: "fetch all items according UserId"});
    } catch (error) {
        // console.log(error);
        return res.status(500).json({"msg": error});
    }
}

module.exports.removeItem = async (req, res, next)=>{
    try{
        const userId = req.params.userId;
        const foodProductId = req.params.foodProductId;

        console.log({userId, foodProductId});

        const cartProduct = await Cart.findOne({user: new mongoose.Types.ObjectId(userId)}).populate("user").populate("items.food");
        // console.log(cartProduct);
        // console.log(cartProduct.items[0].food._id);
        const cartProductArray = cartProduct.items;
        const index = cartProduct.items.findIndex(item => item.toJSON().food._id.toString() === foodProductId);
        
        cartProduct.items = cartProductArray.splice(index, 1);
        // console.log(cartProductArray.splice(index, 1));
        await cartProduct.save();

        return res.status(201).json({msg: "remove item form cart successfully"});
    } catch (error) {
        // console.log(error);
        return res.status(500).json({"msg": error});
    }
}

module.exports.updateItem = async (req, res, next)=>{
    try{
        const userId = req.params.userId;
        const {foodProductId, updatedFoodObject} = req.body;
        const updatefield = Object.keys(updatedFoodObject)[0];
        const updatevalue = Object.values(updatedFoodObject)[0];

        // console.log(foodProductId, updatefield, updatevalue, userId);
        const cartProduct = await Cart.findOne({user: new mongoose.Types.ObjectId(userId)}).populate("user").populate("items.food");

        const cartProductArray = cartProduct.items;
        const index = cartProductArray.findIndex(item => item.toJSON().food._id.toString() === foodProductId);
        // console.log(index);
        if(updatefield === "quantity")
        {
            cartProduct.items[index].quantity = updatevalue;
        }

        await cartProduct.save();
        return res.status(201).json({cart: cartProduct.items[index], msg: "updated quantity of foodProduct successfully"});
    } catch (error) {
        console.log(error);
        return res.status(500).json({"msg": error});
    }
}
