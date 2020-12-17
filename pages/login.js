import { Button, Icon, Message, Segment, Form } from "semantic-ui-react"
import Link from "next/link"
import React, { useContext } from "react"
import catchErrors from "../utils/catchErrors"
import baseUrl from "../utils/baseUrl";
import axios from "axios";
import { useRouter } from "next/router";
import { handleLogin } from "../utils/auth"
import { Context } from "../components/Store/Store";

const INITIAL_STATE = {
  email: "",
  password: ""
}

function Login() {
  const [user, setUser] = React.useState(INITIAL_STATE);
  const [disabled, setDisable] = React.useState(true);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState("");
  const router = useRouter();
  const [state, dispatch] = useContext(Context);

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
      const url = `${baseUrl}/api/login`
      const payload = { ...user, React: React }
      setLoading(true)
      setError(""); //pra nao deixar ela la pra sempre caso de um erro ne..
      
      const response = await axios.post(url, payload);

      if (response.data.success) {
        //dispatch({type: "SET_USER", user: response.data.user })
        handleLogin(response.data.token);
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
    <Message attached icon="privacy" header="Welcome back!" content="Log in with email and password" color="blue" />
    <Form error={Boolean(error)} loading={loading} onSubmit={handleSubmit}>
      <Message error header="Oops!" content={error} />
      <Segment>
        <Form.Input fluid icon="envelope" iconPosition="left" label="E-mail" name="email" placeholder="E-mail" type="email" value={ user.email } onChange={ handleChange } />
        <Form.Input fluid icon="lock" iconPosition="left" label="Password" name="password" placeholder="Password" type="password" value={ user.password } onChange={ handleChange } />
        <Button icon="signup" type="submit" color="orange" content="Login" disabled={ disabled } />
      </Segment>
    </Form>

    <Message attached="bottom" warning>
      <Icon name="help" />
      New user? { " " }
      <Link href="/signup">
        <a>Sign up here</a>
      </Link>  { " " } instead
    </Message>
  </>
}

export default Login
