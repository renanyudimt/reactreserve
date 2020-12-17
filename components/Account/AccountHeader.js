import { Header, Icon, Segment, Label } from "semantic-ui-react"
function AccountHeader({role, email, createdAt, name}) {
  return <>
    <Segment secondary inverted color="violet">
      <Label
        color="teal"
        size="large"
        ribbon
        icon="privacy"
        style={{ textTansformation: 'capitalize' }}
        content={role}
      />
      <Header inverted textAlign="center" as="h1" icon>
        <Icon name="user" />
        {name}
        <Header.Subheader>{email}</Header.Subheader>
        <Header.Subheader>Joined at {createdAt}</Header.Subheader>
      </Header>      
    </Segment>
  </>
}

export default AccountHeader;