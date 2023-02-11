import { ADD_TO_CART, REMOVE_FROM_CART, EMPTY_FROM_CART } from "../Actions/constants"

export const cartData = (data=[], action) =>{    
    switch(action.type){
        case ADD_TO_CART:
            console.warn("reducer is called", action)
            return [action.data, ...data]
        case REMOVE_FROM_CART:
            console.warn("reducer is called", action)            
            data.length = data.length? data.length - 1: []
            return [...data]            
        case EMPTY_FROM_CART:
            console.warn("reducer is called", action)
            data = []
            return [...data]
        default:
            return []
    }    
}

