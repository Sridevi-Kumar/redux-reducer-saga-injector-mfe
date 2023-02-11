import {useSelector} from 'react-redux'
import React, { Suspense, useEffect, useState } from 'react';

const Header = () =>{   
    const res = useSelector((state) => console.log("State ", JSON.stringify(state))) 
    // const result = useSelector((state) => state.productApp.cartData)
    
    
    const result = useSelector((state) => state?.productApp?.cartData)
    console.log("data in header", result)
    const prodResult = useSelector((state) => {
        let pr = state?.productApp?.productData
        console.log(pr)
    })

    
    
    
    return(
        <div className="header">
            <div className="cart-div">
                <span>{result?.length}</span>
                <img src="https://cdn-icons-png.flaticon.com/512/263/263142.png" alt=""/>
            </div>
        </div>
    )
}

export default Header