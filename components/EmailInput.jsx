'use client'

import { useState } from "react"

export default function EmailInput() {
    const [email, setEmail] = useState('')


    return (
        <div className="sign-up">
            <input value={email} placeholder="Email Address..." onChange={(e) => {
                setEmail(e.target.value)
            }} />
            <button className="button-card">Sign Up</button>
        </div>
    )
}