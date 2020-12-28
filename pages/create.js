import { Form, Input, TextArea, Button, Image, Message, Header, Icon } from "semantic-ui-react"
import React from "react";
import baseUrl from "../utils/baseUrl";
import axios from "axios";
import catchErrors from "../utils/catchErrors";

const INITIAL_PRODUCT = {
  name: "",
  price: "",
  mediaUrl: "",
  description: ""
}

function CreateProduct() {
  const [product, setProduct] = React.useState(INITIAL_PRODUCT)
  const [mediaPreview, setMediaPreview] = React.useState("")
  const [success, setSuccess] = React.useState(false)
  const [loading, setLoading] = React.useState(false)
  const [disabled, setDisabled] = React.useState(true)
  const [error, setError] = React.useState('');

  React.useEffect(() => {
    const isProduct = Object.values(product).every(el => Boolean(el))
    isProduct ? setDisabled(false) : setDisabled(true)
  }, [product])

  function convertBase64(file) {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file)
      fileReader.onload = () => {
        resolve(fileReader.result);
      }
      fileReader.onerror = (error) => {
        reject(error);
      }
    })
  }

  async function handleChange(event) {
    const { name, value, files  } = event.target
    if (name === "media") {
      const base64 = await convertBase64(files[0])
      setMediaPreview(window.URL.createObjectURL(files[0]))
      setProduct({...product, mediaUrl: base64})
    } else {
      //colocando [] estamos dizedo ao react que name nao e um string e sim uma property, com o prevState, nao limpa a variavel sempre que troca de value
      setProduct({...product, [name]: value})
    }
  }


  async function handleSubmit(event) {
    event.preventDefault();
    try {
      setLoading(true)
      setError(""); //pra nao deixar ela la pra sempre caso de um erro ne..
      const url = `${baseUrl}/api/product`
      const payload = {
        name: product.name,
        price: product.price,
        description: product.description,
        mediaUrl: product.mediaUrl
      }

      await axios.post(url, payload)
        .then((res) => {
          if (res.data.success) {
            setLoading(false)
            setProduct(INITIAL_PRODUCT)
            setSuccess(true)
          } else {
            setLoading(false)
            setError(res.data.msg)
          }
        })
        .catch((error) => {
          setLoading(false)
          setError(true)
        })

    } catch(error) {
      catchErrors(error, setError)
    } finally {
      setLoading(false)
    }
  }

  return (<>
    <Header as="h2" block>
      <Icon name="add" color="orange"></Icon>
      Create new Product
    </Header>
    <Form loading={loading} success={ success } error={Boolean(error)} onSubmit={ handleSubmit } >
      <Message success icon="check" header="Success!" content="Your product has been posted" />
      <Message error header="Oops!" content={error} />

      <Form.Group widths="equal">
        <Form.Field
          control={Input}
          name="name"
          placeholder="Name"
          label="Name"
          value={ product.name }
          onChange={ handleChange }
        />
        <Form.Field 
          control={Input}
          name="price"
          label="Price"
          placeholder="Price"
          min="0.00"
          step="0.01"
          type="number"
          value={ product.price }
          onChange={ handleChange }
        />
        <Form.Field 
          control={Input}
          name="media"
          type="file"
          label="Media"
          content="Select Image"
          accept="image/*"
          onChange={ handleChange }
        />
      </Form.Group>
      <Image  src={ mediaPreview } rounded centered size="small" />
      <Form.Field 
        control={TextArea}
        name="description"
        label="Description"
        placeholder="Description"
        value={ product.description }
        onChange={ handleChange }
      />
      <Form.Field 
        control={Button}
        color="blue"
        icon="pencil alternate"
        content="Submit"
        type="submit"
        disabled={disabled || loading} //vai desabilitar quando estiver no loading
      />

    </Form>
  </>)
}

export default CreateProduct