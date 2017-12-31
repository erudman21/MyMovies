import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class Header extends Component {
  renderContent() {
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return (
          <li>
            <a href="/auth/google">Login With Google</a>
          </li>
        );
      default:
        return (
          <li key="1">
            <a href="/api/logout">Logout</a>
          </li>
        );
    }
  }

  render() {
    return (
      <nav>
        <div className="nav-wrapper cyan darken-4">
          <div className="container">
            <Link
              to={this.props.auth ? "/movies" : "/"}
              className="left brand-logo"
            >
              <a
                href="mobile"
                data-activates="mobile-demo"
                className="button-collapse"
              >
                <i className="material-icons">menu</i>
              </a>
              MyMovies
            </Link>
            <ul className="right hide-on-med-and-down">
              {this.renderContent()}
            </ul>
            <ul className="side-nav" id="mobile-demo">
              {this.renderContent()}
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(Header);
