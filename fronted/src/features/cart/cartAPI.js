import axios from "axios"

export  const fetchItem = () => {
    return axios.get('')
}
export  const addItem = (foodProduct) => {
    return  axios.post("", foodProduct)
}

export  const deleteItem = () => {
    return axios.delete('',)
}
export  const updateItem = () => {
    return axios.patch("", )
}   