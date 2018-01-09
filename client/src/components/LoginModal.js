import React, { Component } from "react";
import { Button, Modal, Icon } from "semantic-ui-react";

class LoginModal extends Component {
  render() {
    const { open, close } = this.props;
    return (
      <Modal size="mini" open={open} onClose={close}>
        <Modal.Actions>
          <Button floated="left" href="/auth/facebook" color="facebook">
            <Icon name="facebook" />
            Facebook
          </Button>
          <Button floated="right" href="/auth/google" color="google plus">
            <Icon name="google plus" />
            Google
          </Button>
        </Modal.Actions>
      </Modal>
    );
  }
}

export default LoginModal;
