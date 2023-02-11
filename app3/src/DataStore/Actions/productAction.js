import { PRODUCT_LIST } from "./constants"

export const productList = () =>{
    let data = "hello"
    console.log("productList Action called", data)
    return{
        type: PRODUCT_LIST,
        data: data
    }
}

