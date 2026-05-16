'use client'

import { useProducts } from "@/context/ProductContext";
import Link from "next/link";

export default function Cart() {
    const { cart } = useProducts()
    const numProducts = Object.keys(cart).reduce((accumulator, curr, currIndex) => {
        const numProduct = cart[curr].quantity  //cart[curr] gives no of prod for  each product i.e by price id here
        const sum = accumulator + parseInt(numProduct)
        return sum
    }, 0)

    return (
        <div>
            <Link href="/cart" className="unstyled-button" >
                <i className="fa-solid fa-bag-shopping"></i>
                {numProducts >0 && (<div className="cart-num">
                    <p>{numProducts}</p>
                </div>)}
            </Link>
        </div>
    )
}

