import React from 'react'
import {
  Button,
  Form,
  Grid,
  Header,
  Segment,
} from 'semantic-ui-react'

const SignUp = ({ handleSubmit, username, password }) => {
  return (
    <Grid
      textAlign="center"
      style={{ height: '100vh' }}
      verticalAlign="middle"
    >
      <Grid.Column style={{ maxWidth: 450 }}>
        <Header as="h2" color="teal" textAlign="center">
          Create a new account
        </Header>
        <Form size="large" onSubmit={handleSubmit}>
          <Segment stacked>
            <Form.Input
              fluid
              icon="user"
              iconPosition="left"
              placeholder="Username"
              value={username.value}
              onChange={username.onChange}
            />
            <Form.Input
              fluid
              icon="lock"
              iconPosition="left"
              placeholder="Password"
              type="password"
              value={password.value}
              onChange={password.onChange}
            />

            <Button color="teal" fluid size="large">
              Signup
            </Button>
          </Segment>
        </Form>
      </Grid.Column>
    </Grid>
  )
}
export default SignUp
