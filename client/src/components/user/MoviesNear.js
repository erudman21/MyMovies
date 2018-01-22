import React, { Component } from 'react';
import { Card, Header } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { fetchTheaters } from '../../actions/index';
import moment from 'moment';

class MoviesNear extends Component {
	constructor(props) {
		super(props);
		this.state = { loading: true };
	}

	componentDidMount = () => {
		this.props.fetchTheaters(
			this.props.location,
			moment().format('YYYY-MM-DD')
		);
	};

	render() {
		return (
			<Card style={{ borderRadius: '0' }}>
				<Header
					textAlign="center"
					style={{
						fontSize: '130%',
						margin: '0 auto'
					}}>
					Movies Near You
				</Header>
				<Card.Meta textAlign="center">Hi</Card.Meta>
			</Card>
		);
	}
}

export default connect(null, { fetchTheaters })(MoviesNear);
