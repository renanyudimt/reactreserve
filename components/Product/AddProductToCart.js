import { Input } from "semantic-ui-react";
import React, { useState } from "react";
import { useRouter, Router } from "next/router"
import axios from "axios"
import baseUrl from "../../utils/baseUrl";
import cookie from "js-cookie";
import catchErrors from "../../utils/catchErrors";

function AddProductToCart({ user, productId }) {
  const [quantity, setQuantity] = useState(1);
  const router = useRouter();
  const token = cookie.get("reactreserve_token");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false) //eu que quero fazer essa configuracao

  React.useEffect(() => {
    let timeout;
    if (success) { 
      timeout = setTimeout(() => setSuccess(false), 3300);
    }

    //quando o timeout esta rodando e o usuario muda de pagina, apos concluir o timeout, 
    //ira tentar mudar o state de uma pagina de foi "unmount" e ira aparecer um warning no console, isso evita o erro,
    //pois o return é evento do componentWillUnmount

    return() => {
      clearTimeout(timeout)
    }
  }, [success])

  async function handleAddProductToCart() { 
    try {
      setLoading(true);
      const url = `${baseUrl}/api/cart`;
      const payload = {
        quantity: quantity,
        productId: productId,
      }
      const headers = {
        headers: {
          Authorization: token
        }
      }
      
      await axios.put(url, payload, headers)
        .then(() => setSuccess(true))
        .catch(() => setState(true))
    } catch(error) {
      catchErrors(error, window.alert)
    } finally {
      setLoading(false);
    }
  }

  return <>
    <Input 
      type="number"
      min="1"
      placeholder="Quantity"
      value={ quantity }
      onChange={ event => setQuantity(Number(event.target.value)) }
      action={
        user && success ? {
          color: "blue",
          content: "Item added!",
          icon: "plus cart",
          disabled: true
        } :
        user ? {
        color: "orange",
        content: "Add to Cart",
        icon: "plus cart",
        loading: loading,
        disabled: loading,
        onClick: handleAddProductToCart
      } : {
        color: "blue",
        content: "Signup to Purchase",
        icon: "signup",
        onClick: () => {
          router.push("/login")
        }
      }}
    />
  </>
}

export default AddProductToCart;