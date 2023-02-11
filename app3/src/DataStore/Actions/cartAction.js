import { ADD_TO_CART, EMPTY_FROM_CART, REMOVE_FROM_CART } from "./constants"

export const addToCart = (data) =>{
    console.log("addToCart Action called", data)
    return{
        type: ADD_TO_CART,
        data: data
    }
}

export const removeFromCart = (data) => {
    console.log("removeFromCart Action called", data)
    return{
        type: REMOVE_FROM_CART,
        data: data
    }
}

export const emptyCart = (data) => {
    console.log("emptyCart Action called", data)
    return{
        type: EMPTY_FROM_CART,
        data: data
    }
}