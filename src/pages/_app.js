import "@/scss/global.scss"
import { AuthProvider, CartProvider } from "@/contexts"

function MyApp({ Component, pageProps }) {
  console.log = () => {}
  console.error = () => {}
  console.warn = () => {}
  return (
    <AuthProvider>
      <CartProvider>
        <Component {...pageProps} />
      </CartProvider>
    </AuthProvider>
    )
}

export default MyApp
