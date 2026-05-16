'use client'

import Link from "next/link";
import { useEffect, useRef, useState } from "react"

export default function ImageBanner() {

    const [isLoaded, setIsLoaded] = useState(false);
    const imageRef = useRef()

    useEffect(() => {
        if (imageRef.current.complete) {
            setIsLoaded(true)
        }
    }, [])

    return (
        <div className="banner-images">
            <img className="low-res-img" src="low_res/banner.jpeg" alt="banner-low-res" />
            <img ref={imageRef} className="high-res-img" src="med_res/banner.png" alt="banner-high-res"
                style={{ opacity: isLoaded ? 1 : 0 }}
                onLoad={() => {
                    //when hi res img gets loaded completely this onload callback runs
                    //intention is to take this intially invisible image to become visible
                    setIsLoaded(true)
                }} />
            <div className="cta-btns-container">
                <div>
                    <div>
                        <h3>Welcome to</h3>
                        <h1>The KrazySticker Store</h1>
                    </div>
                    <div>
                        <Link href={'#sticker'}><button>Shop Stickers</button></Link>
                        <Link href={'#planner'}><button>Shop Planners</button></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}