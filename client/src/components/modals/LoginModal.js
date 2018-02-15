import React, { Component } from 'react';
import {
  Button,
  Modal,
  Icon,
  Header,
  Dimmer,
  Loader,
  Form,
  Segment,
  Divider,
  Message
} from 'semantic-ui-react';
import RegisterModal from './RegisterModal';
import axios from 'axios';
import { withRouter } from 'react-router-dom';
import { getFlashLoginMessages } from '../../actions/index';
import { connect } from 'react-redux';

class LoginModal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      username: '',
      password: '',
      registerModalOpen: false,
      errorMessage: '',
      error: false
    };
  }

  startLoading() {
    this.setState({ loading: true });

    setTimeout(() => this.setState({ loading: false }), 4000);
  }

  handleInput = (e, { value, name }) => {
    this.setState({ [name]: value });
  };

  handleSubmit = () => {
    const { username, password } = this.state;
    const { getFlashLoginMessages, history } = this.props;

    axios
      .post('/auth/local/login', `username=${username}&password=${password}`)
      .then(() => {
        getFlashLoginMessages().then(() => {
          const { message } = this.props;

          if (message) {
            this.setState({
              error: true,
              errorMessage: message
            });
          } else {
            history.push('/movies');
          }
        });
      });
  };

  showRegisterModal = () => this.setState({ registerModalOpen: true });
  closeRegisterModal = () => this.setState({ registerModalOpen: false });

  render() {
    const { open, close } = this.props;
    const {
      loading,
      registerModalOpen,
      username,
      password,
      error,
      errorMessage
    } = this.state;

    return (
      <Modal
        size="mini"
        open={open}
        onClose={close}
        style={{ borderRadius: '5px' }}
      >
        {loading ? (
          <Dimmer active>
            <Loader />
          </Dimmer>
        ) : null}
        <Header style={{ textAlign: 'center', borderRadius: '5px' }}>
          Log in to see your own movies!
        </Header>
        <Form size="small" onSubmit={this.handleSubmit} error={error}>
          <Segment stacked>
            <Form.Input
              fluid
              name="username"
              icon="user"
              onChange={this.handleInput}
              iconPosition="left"
              placeholder="Username"
              error={error && username.length === 0}
            />
            <Form.Input
              fluid
              name="password"
              icon="lock"
              onChange={this.handleInput}
              iconPosition="left"
              placeholder="Password"
              type="password"
              error={error && password.length === 0}
            />
            {error ? <Message error content={errorMessage} /> : null}
            <Button color="instagram" fluid type="submit">
              Login
            </Button>
            <p style={{ textAlign: 'center', marginTop: '5px' }}>
              New user? Click{' '}
              <a onClick={this.showRegisterModal} style={{ cursor: 'pointer' }}>
                here
              </a>
            </p>
            <Divider horizontal>Or</Divider>
            <Button
              onClick={() => this.startLoading()}
              href="/auth/google"
              color="google plus"
              fluid
            >
              <Icon name="google plus" /> Google
            </Button>
          </Segment>
        </Form>
        <RegisterModal
          open={registerModalOpen}
          close={this.closeRegisterModal}
        />
      </Modal>
    );
  }
}

function mapStateToProps({ localAuthFlash }) {
  return { message: localAuthFlash };
}

export default connect(mapStateToProps, { getFlashLoginMessages })(
  withRouter(LoginModal)
);
