import React, { Component } from 'react';
import { Button, Modal, Header, Dimmer, Loader } from 'semantic-ui-react';

class DeleteModal extends Component {
  constructor(props) {
    super(props);

    this.state = { loading: false };
  }

  startLoading = () => {
    this.setState({ loading: true });

    setTimeout(() => this.setState({ loading: false }), 2500);
  };

  render() {
    const { open, close, deleteClicked } = this.props;
    const { loading } = this.state;

    return (
      <Modal
        size="mini"
        basic
        open={open}
        onClose={close}
        style={{ borderRadius: '5px' }}
      >
        {loading ? (
          <Dimmer active>
            <Loader />
          </Dimmer>
        ) : null}
        <Header style={{ borderRadius: '5px' }}>Delete this movie?</Header>
        <Modal.Actions>
          <Button
            onClick={close}
            basic
            inverted
            color="grey"
            style={{ width: '40%', margin: '5%' }}
          >
            Nevermind!
          </Button>
          <Button
            floated="right"
            inverted
            onClick={deleteClicked}
            color="red"
            style={{ width: '40%', margin: '5%' }}
          >
            Yes
          </Button>
        </Modal.Actions>
      </Modal>
    );
  }
}

export default DeleteModal;
