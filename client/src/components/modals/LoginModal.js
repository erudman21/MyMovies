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

class LoginModal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false
    };
  }

  startLoading() {
    this.setState({ loading: true });

    setTimeout(() => this.setState({ loading: false }), 4000);
  }

  render() {
    const { open, close } = this.props;
    const { loading } = this.state;

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
              placeholder="E-mail address"
            />
            <Form.Input
              fluid
              icon="lock"
              iconPosition="left"
              placeholder="Password"
              type="password"
            />

            <Button
              color="olive"
              fluid
              onClick={() => this.startLoading()}
              href="/auth/local"
            >
              Login
            </Button>
            <Divider horizontal>Or</Divider>
            <Button
              disabled
              onClick={() => this.startLoading()}
              href="/auth/facebook"
              color="facebook"
              fluid
              style={{ marginBottom: '10px' }}
            >
              <Icon name="facebook" /> Facebook - Sorry, not currently available
            </Button>
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
      </Modal>
    );
  }
}

export default LoginModal;
