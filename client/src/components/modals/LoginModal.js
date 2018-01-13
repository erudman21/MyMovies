import React, { Component } from "react";
import { Button, Modal, Icon, Header, Dimmer, Loader } from "semantic-ui-react";

class LoginModal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false
    };
  }

  startLoading() {
    this.setState({ loading: true });

    setTimeout(() => this.setState({ loading: false }), 2500);
  }

  render() {
    const { open, close } = this.props;
    const { loading } = this.state;

    return (
      <Modal
        size="mini"
        open={open}
        onClose={close}
        style={{ borderRadius: "5px" }}
      >
        {loading ? (
          <Dimmer active>
            <Loader />
          </Dimmer>
        ) : null}
        <Header style={{ textAlign: "center", borderRadius: "5px" }}>
          Log in to see your own movies!
        </Header>
        <div style={{ width: "90%", marginLeft: "5%" }}>
          <Button
            onClick={() => this.startLoading()}
            href="/auth/facebook"
            color="facebook"
            fluid
            style={{ marginTop: "5%" }}
          >
            <Icon name="facebook" /> Facebook
          </Button>
          <br />
          <Button
            onClick={() => this.startLoading()}
            href="/auth/google"
            color="google plus"
            fluid
            style={{ marginBottom: "5%" }}
          >
            <Icon name="google plus" /> Google
          </Button>
        </div>
      </Modal>
    );
  }
}

export default LoginModal;
