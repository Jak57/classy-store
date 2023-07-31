import { Toaster } from 'react-hot-toast'
import AppLayout from 'src/components/Layout'
import 'src/styles/globals.css'
import { CartProvider } from 'use-shopping-cart'
import { SessionProvider } from "next-auth/react"

const stripeKey = process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY

export default function App({ 
  Component, 
  pageProps: { session, ...pageProps }
 }) {
  return(
    <SessionProvider session={session}>
      <CartProvider stripe={stripeKey} cartMode="checkout-session" currency="USD">
        <AppLayout>
          <Component {...pageProps}/>
          <Toaster />
        </AppLayout>
      </CartProvider>
    </SessionProvider>
  )
}
