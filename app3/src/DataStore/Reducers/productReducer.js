import { PRODUCT_LIST } from "../Actions/constants"

export const productData = (data=[], action) =>{    
    switch(action.type){
        case PRODUCT_LIST:
            console.warn("reducer is called", action)
            return [action.data, ...data]        
        default:
            return data
    }    
}

