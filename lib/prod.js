import '../envConfig'
import { loadEnvConfig } from "@next/env"

export async function getProducts() {
  const baseURL = process.env.NEXT_PUBLIC_BASE_URL
  const response = await fetch(`${baseURL}/api/products`)
  const products = await response.json()
  return products
}