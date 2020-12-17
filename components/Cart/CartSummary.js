import { Button, Segment, Divider } from "semantic-ui-react"
import React, { useState } from "react";
import calculateCartTotal from "../../utils/calculateCartTotal";
import StripeCheckout from "react-stripe-checkout"

function CartSummary({ products, handleCheckout, success }) {
  const [cartAmount, setCartAmount] = useState(0)
  const [stripeAmount, setStripeAmount] = useState(0)
  const [isCartEmpty, setCartEmpty] = useState(true)
  console.log(products)

  React.useEffect(() => {
    const { cartTotal, stripeTotal } = calculateCartTotal(products)
    setCartEmpty(products.length == 0)
    setCartAmount(cartTotal)
    setStripeAmount(stripeTotal)

  }, [products])
  
  return (
  <> 
    <Divider />
    <Segment clearing size="large">
      <strong>Sub total: </strong> ${ cartAmount }
      <StripeCheckout 
        name="React Reserve"
        amount={stripeAmount}
        image={products.length > 0 ? products[0].product.mediaUrl : ""}
        currency="USD"
        shippingAddress={true}
        zipCode={true}
        token={handleCheckout}
        triggerEvent="onClick"
        stripeKey={process.env.STRIPE_PUBLISH_KEY}
      >
        <Button disabled={isCartEmpty || success}  icon="cart" color="teal" floated="right" content="Checkout" />
      </StripeCheckout>
    </Segment>
  </>
  )
}

export default CartSummary