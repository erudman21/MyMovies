import React, { Component } from "react";
import { connect } from "react-redux";
import { Menu, Button, Container, Image } from "semantic-ui-react";
import SearchBar from "./searchbar/SearchBar";
import LoginModal from "./modals/LoginModal";

class SiteHeader extends Component {
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

  // Header content changes depending on authentication of the user
  renderContent() {
    switch (this.props.auth) {
      case null:
        return;
      case false:
        // User is not logged in -> include log in option
        return (
          <Menu.Item position="right">
            <Button onClick={this.show} inverted>
              Log in
            </Button>
            <LoginModal open={this.state.open} close={this.close} />
          </Menu.Item>
        );
      default:
        // User is logged in -> include log out option
        return (
          <Menu.Item position="right">
            <Button as="a" href="/api/logout" inverted>
              Logout
            </Button>
          </Menu.Item>
        );
    }
  }

  render() {
    return (
      <Menu inverted color="black" style={{ borderRadius: "0px" }}>
        <Container>
          <Menu.Item
            as="a"
            // If user is logged in clicking on the logo redirects to Dashboard
            // Otherwise it redirects to the landing page
            href={this.props.auth ? "/movies" : "/"}
            className="ui medium header"
          >
            <Image
              size="small"
              src={require("../media/logo.png")}
              style={{ marginRight: "0.25em" }}
            />
            MyMovies
          </Menu.Item>
          <SearchBar />
          {this.renderContent()}
        </Container>
      </Menu>
    );
  }
}

// Get the auth state to determine header content
function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(SiteHeader);
