import axios from "axios"

export  const fetchItem = (userId) => {
    return axios.get(`http://localhost:4000/api/cart/fetchitems/${userId}`);
}
export  const addItem = (userId, foodProductId) => {
    return  axios.post("http://localhost:4000/api/cart/addtocart", {userId, foodProductId});
}
export  const removeItem = (userId, foodProductId) => {
    return axios.delete(`http://localhost:4000/api/cart/removeitem/${userId}/${foodProductId}`);
}
export  const updateItem = (userId, foodProductId, updatedFoodObject) => {
    return axios.patch(`http://localhost:4000/api/cart/updateitem/${userId}`, {foodProductId, updatedFoodObject});
}   