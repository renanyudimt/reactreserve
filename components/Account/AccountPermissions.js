import React from "react";
import { Header, Checkbox, Icon, Table } from "semantic-ui-react"
import axios from "axios"
import baseUrl from "../../utils/baseUrl";
import cookie from "js-cookie"
import formatDate from "../../utils/formatDate"

function AccountPermissions() {
  const [users, setUsers] = React.useState([])

  React.useEffect(() => {
    getUsers()
  }, [])

  async function getUsers() {
    const url = `${baseUrl}/api/users`
    const token = cookie.get("reactreserve_token")
    const payload = { headers: { Authorization: token } }
    const response = await axios.get(url, payload)
    setUsers(response.data.users)
  }

  return <div style={{margin: '2rem 0'}}>
    <Header as="h2">
      <Icon name="settings" />
      User Permissions
    </Header>
    <Table compact celled definition>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell />
          <Table.HeaderCell>Name</Table.HeaderCell>
          <Table.HeaderCell>E-mail</Table.HeaderCell>
          <Table.HeaderCell>Joined</Table.HeaderCell>
          <Table.HeaderCell>Updated</Table.HeaderCell>
          <Table.HeaderCell>Role</Table.HeaderCell>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {users.map(user => (
          <UserPermission key={user._id} user={user} />
        ))}
      </Table.Body>
    </Table>
  </div>
}

function UserPermission({ user }) {
  const [admin, setAdmin] = React.useState(user.role == "admin")
  const isFirstRun = React.useRef(true) //guarda os valores inicias de uma variavel

  React.useEffect(()=> {
    if (isFirstRun.current) {
      isFirstRun.current = false
      return;
    }

    updatePermission();
  }, [admin])

  async function updatePermission() {
    const url = `${baseUrl}/api/account`
    const payload = { _id: user._id, role: admin ? "admin" : "user"}
    await axios.put(url, payload)
  }

  function handleChangePermission() {
    setAdmin(prevState => !prevState)
  }

  return (
    <Table.Row>
      <Table.Cell collapsing>
        <Checkbox toggle onChange={handleChangePermission} checked={admin} />
      </Table.Cell>
      <Table.Cell>{user.name}</Table.Cell>
      <Table.Cell>{user.email}</Table.Cell>
      <Table.Cell>{formatDate(user.createdAt)}</Table.Cell>
      <Table.Cell>{formatDate(user.updatedAt)}</Table.Cell>
      <Table.Cell>{admin ? "admin" : "user"}</Table.Cell>
    </Table.Row>
  );
}



export default AccountPermissions