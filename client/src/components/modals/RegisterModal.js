import React, { Component } from 'react';
import { Modal, Button, Form, Segment } from 'semantic-ui-react';

class RegisterModal extends Component {
  render() {
    const { open, close } = this.props;

    return (
      <Modal open={open} onClose={close} size="mini">
        <Modal.Header style={{ textAlign: 'center' }}>
          Create a new account
        </Modal.Header>
        <Modal.Content>
          <Form size="small">
            <Segment stacked>
              <Form.Input
                fluid
                icon="user"
                iconPosition="left"
                placeholder="Username"
              />
              <Form.Input
                fluid
                icon="lock"
                iconPosition="left"
                placeholder="Password"
                type="password"
              />
            </Segment>
          </Form>
        </Modal.Content>
        <Modal.Actions>
          <Button
            color="red"
            icon="arrow left"
            content="Back"
            onClick={close}
            floated="left"
          />
          <Button
            icon="check"
            content="Register"
            href="/movies"
            color="instagram"
          />
        </Modal.Actions>
      </Modal>
    );
  }
}

export default RegisterModal;
