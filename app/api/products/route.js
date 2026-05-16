import Stripe from "stripe"
import '../../../envConfig.js'
import { loadEnvConfig } from "@next/env"

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)

export async function GET() {
    try {
        //fetch all active products from stripe
        const products = await stripe.products.list({ active: true })

        //    example for product response:   {
        //   "object": "list",
        //   "data": [
        //     {
        //       "id": "prod_P123abc",
        //       "object": "product",
        //       "active": true,
        //       "name": "Gold Plan",
        //       "description": "Premium access to all features",
        //       "images": ["https://example.com/image.png"],
        //       "metadata": {},
        //       "default_price": "price_123..." 
        //     }
        //   ],
        //   "has_more": false,
        //   "url": "/v1/products"
        // }

        //fetch all the prices that are active
        const prices = await stripe.prices.list({ active: true })

        //example for prices response
        // {
        //     "object": "list",
        //         "data": [
        //             {
        //                 "id": "price_123abc",
        //                 "object": "price",
        //                 "active": true,
        //                 "currency": "usd",
        //                 "unit_amount": 5000, // $50.00 (in cents)
        //                 "recurring": {
        //                     "interval": "month",
        //                     "usage_type": "licensed"
        //                 },
        //                 "product": "prod_P123abc", // Links back to the Product ID
        //                 "type": "recurring"
        //             }
        //         ],
        //             "has_more": false,
        //                 "url": "/v1/prices"
        // }

        //combine the products and thier associated prices

        const combinedData = products.data.map((product) => {
            const productPrices = prices.data.filter((price) => {
                return price.product === product.id
            })

            return {
                ...product,
                prices: productPrices.map((price) => {
                    return {
                        id: price.id,
                        unit_amount: price.unit_amount,
                        currency: price.currency,
                        recurring: price.recurring
                    }
                })
            }
        })

        //send the combined data as json

        return Response.json(combinedData)

    } catch (err) {
        console.error('Error Fetching data from stripe:', err.message)
        return Response.json({ error: 'Failed to fetch data from stripe' })
    }
}