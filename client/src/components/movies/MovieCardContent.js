import React, { Component } from "react";
import { Image, Card, Divider, Icon } from "semantic-ui-react";
import DeleteModal from "../modals/DeleteModal";
import ReactStars from "react-stars";

class MovieCardContent extends Component {
  constructor(props) {
    super(props);

    this.state = { hover: false };
  }

  openEdits = () => this.setState({ hover: true });
  closeEdits = () => this.setState({ hover: false });

  renderEditors = () => {
    const { openModal } = this.props;

    return (
      <div>
        <Icon
          onClick={openModal}
          link
          name="close"
          style={{ position: "absolute", right: "2px", top: "2px" }}
        />
      </div>
    );
  };

  render() {
    const { movie, open, closeModal, handleClick, deleteClicked } = this.props;

    return (
      <Card
        fluid
        key={movie.title}
        onMouseEnter={this.openEdits}
        onMouseLeave={this.closeEdits}
      >
        <Card.Content onClick={() => handleClick(movie)}>
          {this.state.hover ? this.renderEditors() : null}
          <Image
            floated="left"
            size="small"
            src={movie.image}
            style={{ margin: "auto 2% auto 0" }}
          />
          <Card.Header textAlign="center" style={{ fontSize: "200%" }}>
            {movie.title}
          </Card.Header>
          <Divider hidden style={{ margin: ".5% 0" }} />
          <Card.Meta style={{ fontSize: "15px" }}>
            <div>Seen: {new Date(movie.dateSeen).toLocaleDateString()}</div>
            <Divider hidden style={{ margin: "1% 0" }} />
            Your Rating:
            <ReactStars
              count={10}
              value={movie.personalRating}
              edit={false}
              half
            />
            <Divider hidden style={{ margin: "1% 0" }} />
            Your Review:<br />
            <div style={{ overflow: "auto", maxHeight: "93px" }}>
              {movie.personalComments}
            </div>
            <DeleteModal
              open={open}
              close={closeModal}
              deleteClicked={deleteClicked}
            />
          </Card.Meta>
        </Card.Content>
      </Card>
    );
  }
}

export default MovieCardContent;
