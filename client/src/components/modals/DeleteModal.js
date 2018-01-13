import React, { Component } from "react";
import { Button, Modal, Header, Dimmer, Loader } from "semantic-ui-react";

class DeleteModal extends Component {
  constructor(props) {
    super(props);

    this.state = { loading: false };
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
          Are you sure you want to delete this movie?
        </Header>
        <div>
          <Button
            floated="left"
            onClick={close}
            color="grey"
            style={{ width: "40%", margin: "5%" }}
          >
            Nevermind!
          </Button>
          <Button
            floated="right"
            onClick={this.startLoading}
            color="red"
            style={{ width: "40%", margin: "5%" }}
          >
            Yes
          </Button>
        </div>
      </Modal>
    );
  }
}

export default DeleteModal;
