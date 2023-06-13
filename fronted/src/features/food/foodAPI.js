import axios from 'axios'

export const fetchfoods=(category)=>{
    console.log("api called");
    return axios.get(`http://localhost:4000/api/food/foodmenu/${category}`);
}