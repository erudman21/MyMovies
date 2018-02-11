import React, { Component } from 'react';
import { Modal, Button, Form } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { registerNewUser } from '../../actions/index';

class RegisterModal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: ''
    };
  }

  handleInput = (e, { value, name }) => {
    this.setState({ [name]: value });
  };

  handleSubmit = () => {
    const { registerNewUser } = this.props;

    registerNewUser({ user: this.state });
  };

  render() {
    const { open, close } = this.props;
    const { username, password } = this.state;

    return (
      <Modal open={open} onClose={close} size="mini">
        <Modal.Header style={{ textAlign: 'center' }}>
          Create a new account
        </Modal.Header>
        <Modal.Content>
          <Form size="small" onSubmit={this.handleSubmit}>
            <Form.Input
              value={username}
              name="username"
              onChange={this.handleInput}
              fluid
              icon="user"
              iconPosition="left"
              placeholder="Username"
            />
            <Form.Input
              value={password}
              type="password"
              name="password"
              onChange={this.handleInput}
              fluid
              icon="lock"
              iconPosition="left"
              placeholder="Password"
            />
            <Button
              color="red"
              icon="arrow left"
              content="Back"
              onClick={close}
            />
            <Button
              icon="check"
              content="Register"
              type="submit"
              color="instagram"
              floated="right"
            />
          </Form>
        </Modal.Content>
      </Modal>
    );
  }
}

export default connect(null, { registerNewUser })(RegisterModal);
