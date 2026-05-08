'use client'
import { useEffect } from "react"

export default function Error(props) {
    const { error, reset } = props
    useEffect(() => {
        console.log(error)
    }, [error])
    return (
        <div>
            <h2>Something went wrong :(</h2>
            <button onClick={reset}>Reset</button>
            <Link href={'/'}>
                <button>Home</button>
            </Link>
        </div>
    )
}