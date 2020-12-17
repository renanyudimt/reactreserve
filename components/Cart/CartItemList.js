import { Header, Segment, Button, Icon, Item, Message } from "semantic-ui-react"
import { useRouter } from "next/router"

function CartItemList({ products = [], user, handleRemoveFromCart, success }) {
  const router = useRouter();

  function mapProductsToItem(products) {
    return products.map( item => ({
      childkey: item.product._id,
      header: (
        <Item.Header as="a"/** as anchor tag */ onClick={() => {
          router.push(`/product?_id=${item.product._id}`)
        }}> 
          { item.product.name } 
        </Item.Header>
      ),
      image: item.product.mediaUrl,
      meta: `${item.quantity} x $${item.product.price}`,
      fluid: "true",
      extra: (
        <Button 
          basic
          icon="remove"
          floated="right"
          onClick={() => { handleRemoveFromCart(item.product._id) }}
        />
      )
    }))
  }

  if (success) {
    return (
      <Message 
        success
        header="Success!"
        content="Your order and payment has been accepted"
        icon="star outline"
      />
    )
  }

  if (products.length == 0) {
    return (
      <Segment secondary color="teal" inverted textAlign="center" placeholder>
        <Header icon>
          <Icon name="shopping basket" />
          No products in your cart. Add some!
        </Header> 
        <div>
          {  user ? (
              <Button color="orange" content="View products" onClick={ () => {router.push("/")} } />
            ) : (
              <Button color="blue" content="Login and add products" onClick={() => { router.push("/login") }} />
            )
          }
        </div>
      </Segment>
    )
  }
  return (
    <Item.Group divided items={mapProductsToItem(products)} />
  )
}

export default CartItemList