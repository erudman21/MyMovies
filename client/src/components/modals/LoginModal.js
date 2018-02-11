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
  Divider
} from 'semantic-ui-react';
import RegisterModal from './RegisterModal';

class LoginModal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      registerModalOpen: false
    };
  }

  startLoading() {
    this.setState({ loading: true });

    setTimeout(() => this.setState({ loading: false }), 4000);
  }

  showRegisterModal = () => this.setState({ registerModalOpen: true });
  closeRegisterModal = () => this.setState({ registerModalOpen: false });

  render() {
    const { open, close } = this.props;
    const { loading, registerModalOpen } = this.state;

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
            <Button
              color="instagram"
              fluid
              onClick={() => this.startLoading()}
              href="/auth/local"
            >
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

export default LoginModal;
