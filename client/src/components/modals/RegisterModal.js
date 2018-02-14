import React, { Component } from 'react';
import { Modal, Button, Form, Message } from 'semantic-ui-react';
import { getFlashRegisterMessages } from '../../actions/index';
import axios from 'axios';
import { connect } from 'react-redux';

class RegisterModal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: '',
      usernameError: '',
      error: false
    };
  }

  handleInput = (e, { value, name }) => {
    this.setState({ [name]: value });
  };

  handleSubmit = () => {
    const { username, password } = this.state;
    const { getFlashRegisterMessages } = this.props;

    axios
      .post('/auth/local/register', `username=${username}&password=${password}`)
      .then(() =>
        getFlashRegisterMessages().then(() => {
          const { message } = this.props;

          if (message) {
            this.setState({
              error: true,
              usernameError: message
            });
          }
        })
      );
  };

  render() {
    const { open, close } = this.props;
    const { username, password, error, usernameError } = this.state;

    return (
      <Modal open={open} onClose={close} size="mini">
        <Modal.Header style={{ textAlign: 'center' }}>
          Create a new account
        </Modal.Header>
        <Modal.Content>
          <Form size="small" onSubmit={this.handleSubmit} error={error}>
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
            {error ? <Message error content={usernameError} /> : null}
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

function mapStateToProps({ localAuthFlash }) {
  return { message: localAuthFlash };
}

export default connect(mapStateToProps, {
  getFlashRegisterMessages
})(RegisterModal);
