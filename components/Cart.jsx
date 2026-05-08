'use client'
import Link from "next/link";

export default function Cart() {
    return (
        <div>
            <Link href="/cart" className="unstyled-button" >
                <i className="fa-solid fa-bag-shopping"></i>
            </Link>
        </div>
    )
}

