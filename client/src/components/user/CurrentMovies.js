import React, { Component } from 'react';
import { Card, List, Image, Loader } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { fetchFandangoMovies } from '../../actions/index';

class CurrentMovies extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true
    };
  }

  componentDidMount = () => {
    this.props
      .fetchFandangoMovies()
      .then(() => this.setState({ loading: false }));
  };

  renderMovies = () => {
    const { currentMovies } = this.props;

    return currentMovies.map(({ title, image, overview }) => {
      return (
        <List.Item style={{ padding: '0 10px 5px 10px' }} key={title}>
          <Image size="mini" src={image} floated="left" />
          <a href={overview} target="_blank">
            {title}
          </a>
        </List.Item>
      );
    });
  };

  render() {
    const { loading } = this.state;

    return (
      <div>
        <Card style={{ borderRadius: '0' }}>
          <Card.Header
            textAlign="center"
            style={{ fontSize: '130%', margin: '10px 10px' }}
          >
            <b>Top Box Office Movies</b>
          </Card.Header>
          <div style={{ height: '27vh', overflow: 'auto' }}>
            {loading ? (
              <Loader active inline="centered" style={{ marginTop: '40%' }} />
            ) : (
              <List
                style={{
                  marginTop: '0'
                }}
              >
                {this.renderMovies()}
              </List>
            )}
          </div>
        </Card>
      </div>
    );
  }
}

function mapStateToProps({ fandangoMovies }) {
  return { currentMovies: fandangoMovies };
}

export default connect(mapStateToProps, { fetchFandangoMovies })(CurrentMovies);
