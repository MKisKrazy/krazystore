'use client'

import React, { useRef, useState } from 'react';
// import emailjs from '@emailjs/browser';

export default function EmailInput() {
    const [email, setEmail] = useState('')
    // const form = useRef();

    // const sendEmail = (e) => {
    //     e.preventDefault();

    //     emailjs.sendForm(
    //         'NEXT_PUBLIC_EMAILJS_SERVICE_ID',
    //         'NEXT_PUBLIC_EMAILJS_TEMPLATE_ID',
    //         form.current,
    //         'NEXT_PUBLIC_EMAILJS_PUBLIC_KEY'
    //     )
    //         .then((result) => {
    //             console.log('Email sent successfully!', result.text);
    //         }, (error) => {
    //             console.log('Failed to send email...', error.text);
    //         });
    // };

    return (

        // <form ref = { form } onSubmit = { sendEmail } >
            <div className="sign-up" >
                <input value={email} placeholder="Email Address..." onChange={(e) => {
                    setEmail(e.target.value)
                }} />
                <button type="submit" className="button-card">Sign Up</button>
            </div >
        // </form >
        
    )
}