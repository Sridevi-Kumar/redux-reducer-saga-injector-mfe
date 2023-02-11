import {combineReducers} from 'redux'
import { productData } from './productReducer'
import { cartData } from './reducer'


const rootReducer = combineReducers({
    cartData,
    productData
})

export default rootReducer


