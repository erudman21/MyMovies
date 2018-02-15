import React, { Component } from 'react';
import { Modal, Button, Form, Message } from 'semantic-ui-react';
import { getFlashRegisterMessages } from '../../actions/index';
import axios from 'axios';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

class RegisterModal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: '',
      confirmPassword: '',
      errorMessage: '',
      error: false
    };
  }

  handleInput = (e, { value, name }) => {
    this.setState({ [name]: value });
  };

  handleSubmit = () => {
    const { username, password, confirmPassword } = this.state;
    const { getFlashRegisterMessages, history } = this.props;

    if (password !== confirmPassword) {
      this.setState({
        error: true,
        errorMessage: "Those passwords don't match!"
      });
    } else {
      axios
        .post(
          '/auth/local/register',
          `username=${username}&password=${password}`
        )
        .then(() =>
          getFlashRegisterMessages().then(() => {
            const { message } = this.props;

            if (message) {
              this.setState({
                error: true,
                errorMessage: message
              });
            } else {
              history.push('/movies');
            }
          })
        );
    }
  };

  render() {
    const { open, close } = this.props;
    const {
      username,
      password,
      confirmPassword,
      error,
      errorMessage
    } = this.state;

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
              error={error && username.length === 0}
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
              error={error && password.length === 0}
            />
            <Form.Input
              value={confirmPassword}
              type="password"
              name="confirmPassword"
              onChange={this.handleInput}
              fluid
              icon="lock"
              iconPosition="left"
              placeholder="Confirm password"
              error={error && confirmPassword.length === 0}
            />
            {error ? <Message error content={errorMessage} /> : null}
            <Button
              color="red"
              icon="arrow left"
              type="button"
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
})(withRouter(RegisterModal));
