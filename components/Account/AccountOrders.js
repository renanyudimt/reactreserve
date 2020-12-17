import { Header, Accordion, Label, Segment, Icon, Button, List, Image } from "semantic-ui-react";
import { useRouter } from "next/router";

function AccountOrders({orders}) {
  const router = useRouter();

  function mapOrdersToPanels(orders) {
    console.log(orders)

    return orders.map(order=> ({
      key: order._id,
      title: {
        content: <Label color="blue" content={order.createdAt} />
      },
      content: {
        content: (
        <>
          <List.Header as="h3">
          Total: ${order.total}
          <Label 
            content={order.email} 
            icon="mail"
            basic
            horizontal
            style={{marginLeft: '1rem'}}  
          />
          </List.Header>
          <List>
          {order.products.map(item => (
            <List.Item>
              <Image avatar src={item.product.mediaUrl} />
              <List.Content>
                <List.Header>{item.name}</List.Header>
                <List.Description>
                  {item.product.quantity} . ${item.product.price}
                </List.Description>
              </List.Content> 
              <List.Content floated="right">
                <Label tag color="red" size="tiny">
                  {item.product.sku}
                </Label>
              </List.Content>
            </List.Item>
          ))}
        </List>
        </>
        )
      }
    }))
  }

  return <>
    <Header as="h2">
      <Icon name="folder open" />
      Order History
    </Header>
    {orders.length == 0 ?(
      <Segment inverted tertiary color="grey" textAlign="center">
        <Header icon>
          <Icon name="copy outline " />
          No past orders.
        </Header>
        <div>
          <Button color="orange" onClick={() => {
            router.push('/')
          }}>
            View Products
          </Button>
        </div>
      </Segment>
    ) : (
      <Accordion 
        fluid 
        styled 
        exclusive={false}
        panels={mapOrdersToPanels(orders)}
      >

      </Accordion>
    )}
  </>
}

export default AccountOrders;