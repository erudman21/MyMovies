import React, { Component } from "react";
import { Button, Image } from "semantic-ui-react";
import LoginModal from "../modals/LoginModal";
import "./style.css";

class Landing extends Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false
    };

    this.show = this.show.bind(this);
    this.close = this.close.bind(this);
  }

  show = () => this.setState({ open: true });
  close = () => this.setState({ open: false });

  render() {
    return (
      <header className="v-header">
        <div className="fullscreen-video-wrap">
          <video
            src={require("../../media/background.mp4")}
            autoPlay="true"
            loop="true"
          />
        </div>
        <div className="header-content">
          <Image
            size="tiny"
            src={require("../../media/logo.png")}
            floated="left"
            style={{ marginRight: ".5em" }}
          />
          <h1>MyMovies</h1>
          <p>An online journal for moviephiles!</p>
          <Button
            size="large"
            onClick={this.show}
            style={{ marginRight: "0", marginLeft: "5px" }}
            inverted
          >
            Log in
          </Button>
          <LoginModal open={this.state.open} close={this.close} />
        </div>
      </header>
    );
  }
}

export default Landing;
