import { Button, Icon, Message, Segment, Form } from "semantic-ui-react"
import Link from "next/link"
import React from "react"
import catchErrors from "../utils/catchErrors"
import axios from "axios"
import baseUrl from "../utils/baseUrl"
import { handleLogin } from "../utils/auth";

const INITIAL_STATE = {
  name: "",
  email: "",
  password: ""
}

function Signup() {
  const [user, setUser] = React.useState(INITIAL_STATE);
  const [disabled, setDisable] = React.useState(true);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState("");

  React.useEffect(() => { //vamos validar os campos do form
    const isUser = Object.values(user).every(el => Boolean(el))
    isUser ? setDisable(false) : setDisable(true)
  }, [user])

  function handleChange(event) {
    const { name, value } = event.target
    setUser(prevState => ({ ...prevState, [name]: value }))
  }

  async function handleSubmit(event) {
    event.preventDefault()

    try {
      setLoading(true)
      setError(""); //pra nao deixar ela la pra sempre caso de um erro ne..
      const url = `${baseUrl}/api/signup`
      const payload = { ...user }
      const response = await axios.post(url, payload)

      if (response.data.success) {
        handleLogin(response.data.token)
      } else {
        setError(response.data.msg)
      }

    } catch(error) {
      catchErrors(error, setError)
    } finally {
      setLoading(false)
    }
  }

  return <>
    <Message attached icon="settings" header="Get Started!" content="Create a new account" color="teal" />
    <Form error={Boolean(error)} loading={loading} onSubmit={handleSubmit}>
      <Message error header="Oops!" content={error} />
      <Segment>
        <Form.Input fluid icon="user" iconPosition="left" label="Name" name="name" placeholder="Name" value={ user.name } onChange={ handleChange } />
        <Form.Input fluid icon="envelope" iconPosition="left" label="E-mail" name="email" placeholder="E-mail" type="email" value={ user.email } onChange={ handleChange } />
        <Form.Input fluid icon="lock" iconPosition="left" label="Password" name="password" placeholder="Password" type="password" value={ user.password } onChange={ handleChange } />
        <Button icon="signup" type="submit" color="orange" content="Signup" disabled={ disabled } />
      </Segment>
    </Form>

    <Message attached="bottom" warning>
      <Icon name="help" />
      Existing user? { " " }
      <Link href="/login">
        <a>Log in here</a>
      </Link>  { " " } instead
    </Message>
  </>
}

export default Signup
