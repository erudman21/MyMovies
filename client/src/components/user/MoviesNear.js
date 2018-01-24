import React, { Component } from 'react';
import { Card, Header } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { fetchTheaters } from '../../actions/index';

class MoviesNear extends Component {
	constructor(props) {
		super(props);
		this.state = { loading: true };
	}

	componentDidMount = () => {
		// this.props.fetchTheaters({
		// 	location: this.props.location,
		// 	date: moment().format('YYYY-MM-DD')
		// });
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
				<Card.Meta textAlign="center">Soon to come!</Card.Meta>
			</Card>
		);
	}
}

export default connect(null, { fetchTheaters })(MoviesNear);
