import { useDispatch, useSelector } from 'react-redux';
import { addToCart, removeFromCart, emptyCart } from '../DataStore/Actions/cartAction'
import { productList } from '../DataStore/Actions/productAction';
import React, { Suspense, useEffect, useState } from 'react';


function Main() {
    const dispatch = useDispatch();
    // const data = useSelector((state) => state?.productData)
    // console.log("State data", data);
    const product = {
        name: "IPhone",
        category: "mobile"
    }

    const emptyProduct = []
    return (
        <div>
            <button onClick={() => { dispatch(addToCart(product)) }}> Add to Cart </button>
            <div>
                <button onClick={() => { dispatch(removeFromCart(product.name)) }}> Remove From Cart </button>
            </div>
            <div>
                <button onClick={() => { dispatch(emptyCart(emptyProduct)) }}> Empty Cart </button>
            </div>
            <div>
                <button onClick={() => { dispatch(productList()) }}> Call Product List </button>
            </div>
        </div>
    );
}

export default Main;
