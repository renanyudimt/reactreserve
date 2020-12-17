import { Segment } from "semantic-ui-react"
import CartItemList from "../components/Cart/CartItemList"
import CartSummary from "../components/Cart/CartSummary"
import { parseCookies } from "nookies";
import baseUrl from "../utils/baseUrl";
import axios from "axios";
import { useState } from "react";
import cookie from "js-cookie"
import catchErrors from "../utils/catchErrors";


function Cart({ products, user }) {  
  const [cartProducts, setCartProducts] = useState(products.cart || [])
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false)

  async function handleRemoveFromCart(productId) {
    try { 
      setLoading(true)
      const url = `${baseUrl}/api/cart`;
      const reactreserve_token = cookie.get("reactreserve_token")
      const payload = {
        params: { productId },
        headers: { Authorization: reactreserve_token }
      }
      await axios.delete(url, payload) //delete e diferente de put os parametros
        .then(response => setCartProducts(response.data.products))
    } catch(error) {
      catchErrors(error, window.alert)
    } finally {
      setLoading(false)
    }
  }

  async function handleCheckout(paymentData) {
    console.log(paymentData)
    try {
      setLoading(true)
      const url = `${baseUrl}/api/checkout`
      const reactreserve_token = cookie.get("reactreserve_token")
      const payload = { paymentData: paymentData }
      const headers = { headers: { Authorization: reactreserve_token }}
      await axios.post(url, payload, headers)
      setSuccess(true)
      
    } catch(error) {
      catchErrors(error, window.alert)
    } finally {
      setLoading(false)
    }
  }

  return (
    <Segment loading={loading}>
      <CartItemList 
        handleRemoveFromCart={handleRemoveFromCart} 
        user={ user } 
        products={ cartProducts }
        success={success}
      />
      <CartSummary 
        handleCheckout={handleCheckout} 
        products={ cartProducts } 
        success={success}
      />
    </Segment>
  )
}

Cart.getInitialProps = async (ctx) => {
  const { reactreserve_token } = parseCookies(ctx);
  if (!reactreserve_token) {
    return {
      products: []
    }
  } else { 
    const url = `${baseUrl}/api/cart`;
    const payload = { headers: { Authorization: reactreserve_token }}
    const response = await axios.get(url, payload)
    return {
      products: response.data
    }
  }
}

export default Cart
