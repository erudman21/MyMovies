import React, { Component } from "react";
import { Button, Modal, Icon, Header } from "semantic-ui-react";

class LoginModal extends Component {
  render() {
    const { open, close } = this.props;
    return (
      <Modal size="mini" open={open} onClose={close}>
        <Header style={{ textAlign: "center" }}>
          Log in to see your own movies!
        </Header>
        <div style={{ width: "90%", marginLeft: "5%" }}>
          <Button
            href="/auth/facebook"
            color="facebook"
            fluid
            style={{ marginTop: "5%" }}
          >
            <Icon name="facebook" /> Facebook
          </Button>
          <br />
          <Button
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
