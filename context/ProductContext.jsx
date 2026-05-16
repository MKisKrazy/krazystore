'use client'

import { createContext, useContext, useState } from "react"

const ProductContext = createContext()


export default function ProductsProvider(props) {
    const { children } = props

    const [cart, setCart] = useState({})

    function handleIncrementProduct(price_id, num, data,noIncrement=false) {
        //copy of cart locally to rewrite
        const newCart = {
            ...cart
        }

        //if product already in cart so take prev value and increment/decrement it
        if (price_id in cart) {
            // newCart[price_id] = newCart[price_id] + num
            newCart[price_id] = {
                ...data,
                quantity: noIncrement ? num : newCart[price_id]?.quantity + num
            }
        } else {
            //product not yet in cart
            newCart[price_id] = {
                ...data,
                quantity: num
            }
        }

        // delete if quantity is 0
        if (parseInt(newCart[price_id]?.quantity) <= 0) {
            delete newCart[price_id]
        }

        setCart(newCart)
    }

    const value = {
        cart,   //cart:cart
        handleIncrementProduct
    }

    return (
        <ProductContext.Provider value={value}>
            {children}
        </ProductContext.Provider>
    )
}

export const useProducts = () => useContext(ProductContext)
