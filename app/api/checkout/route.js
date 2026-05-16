import Stripe from "stripe"
import '../../../envConfig.js'
import { loadEnvConfig } from "@next/env"

const stripe = new Stripe(process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY)

export async function POST(req) {
    try {
        const { lineItems } = await req.json()
        console.log(lineItems)
        const session = await stripe.checkout.sessions.create({
            mode: 'payment',
            line_items: lineItems,
            success_url: process.env.NEXT_PUBLIC_BASE_URL + '/success',
            cancel_url: process.env.NEXT_PUBLIC_BASE_URL + '/'
        })
        return Response.json(session)
    } catch (err) {
        console.error('Error creating cart checkout', err.message)
        return Response.json({ error: 'Failed to create stripe checkout page' })
    }
}