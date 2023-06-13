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

            if(foodProductId!=="") 
            {
                const foodProductArray = exitingUserCart.items.filter((foodProduct)=>foodProduct.toJSON()._id===foodProductId);
                // console.log(foodProductArray.length);
                if(foodProductArray.length == 0){
                    msg = "food is already added into cart";
                    return res.status(201).json({cart: exitingUserCart, msg: msg});
                }

                exitingUserCart.items.push({food: new mongoose.Types.ObjectId(foodProductId), quantity: 1});
                await exitingUserCart.save();

                msg="Cart updated successfully";
            }
            else{
                msg = "cart without updated successfully";
                return res.status(201).json({cart: exitingUserCart, msg: msg});
            }
        }
        else{
            if(foodProductId!=="") 
            {
                const cart = new Cart({
                        user: new mongoose.Types.ObjectId(userId),
                        items: [{food: new mongoose.Types.ObjectId(foodProductId), quantity: "2"}],
                        totalPrice: "85",
                      });

                await cart.save();
                msg = "added new cart with foodItem successfully"
            }
            else{
                const cart = new Cart({
                    user: new mongoose.Types.ObjectId(userId),
                    items: [],
                    totalPrice: "0",
                  });
                await cart.save();
                msg = "added new cart without any foodItem successfully";
            }
        }
        
        const userCart = await Cart.findOne({user: new mongoose.Types.ObjectId(userId)}).populate("user").populate("items.food");
        console.log(userCart);
        return res.status(201).json({cart: userCart, msg: msg});


    } catch (error) {
        console.log(error);
        return res.status(500).json({"msg": error});
    }
}

module.exports.removeItem = async (req, res, next)=>{
    try{

    } catch (error) {
        // console.log(error);
        return res.status(500).json({"msg": error});
    }
}

module.exports.fetchItem = async (req, res, next)=>{
    try{

    } catch (error) {
        // console.log(error);
        return res.status(500).json({"msg": error});
    }
}

module.exports.updateItem = async (req, res, next)=>{
    try{

    } catch (error) {
        // console.log(error);
        return res.status(500).json({"msg": error});
    }
}
