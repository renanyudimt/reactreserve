import { Header, Button, Modal } from "semantic-ui-react";
import React from "react";
import axios from "axios";
import baseUrl from "../../utils/baseUrl";
import { useRouter } from 'next/router'

function ProductAttributes(props) {
  const [modalFlag, setModalFlag] = React.useState(false)
  const router = useRouter();
  const isRoot = props.user && props.user.role === "root"
  const isAdmin = props.user && props.user.role === "admin" 
  const isRootOrAdmin = isRoot || isAdmin

  async function handleDelete() {
    const url = `${baseUrl}/api/product`
    const payload = {
      params: { 
        id: router.query._id 
      }
    }
    await axios.delete(url, payload)
      .then(() => router.push("/"))
      .catch(error => console.log(error))
  }

  return <>
    <Header as="h3">About this product</Header>
    <p>{ props.description }</p>
    {isRootOrAdmin && (
      <>
        <Button icon="trash alternate outline" color="red" content="Delete Product" onClick={() => setModalFlag(true)} />
        <Modal open={modalFlag} dimer="blurring">
          <Modal.Header>Confirm Delete</Modal.Header>
          <Modal.Content>
            <p>Are you sure you want to delete this product?</p>
          </Modal.Content>
          <Modal.Actions>
            <Button content="Cancel" onClick={() => setModalFlag(false)}/>
            <Button content="Delete" negative icon="trash" labelPosition="right" onClick={handleDelete}/>
          </Modal.Actions>
        </Modal>
    </>
    )}
   
  </>
}

export default ProductAttributes;