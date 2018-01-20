import React, { Component } from 'react';
import { Card, List, Header, Container, Divider } from 'semantic-ui-react';
import axios from 'axios';

class ProfileDisplay extends Component {
	constructor(props) {
		super(props);
		this.state = { quote: '', movie: '' };
	}

	getQuote = () => {
		var headers = {
			'X-Mashape-Key':
				'uoE7uHDxYOmshrpA5XbKGKh1jH5np1I12f7jsns3aBNN1QOLlx',
			Accept: 'application/json',
			'Content-Type': 'application/x-www-form-urlencoded'
		};

		axios
			.get(
				'https://andruxnet-random-famous-quotes.p.mashape.com/?c=movies',
				{ headers }
			)
			.then(({ data }) => {
				this.setState({ quote: data.quote, movie: data.author });
			});
	};

	componentDidMount = () => this.getQuote();

	render() {
		const { user } = this.props;
		const { quote, movie } = this.state;

		return (
			<Card style={{ borderRadius: '0' }}>
				<Container style={{ padding: '5px 5px 0 5px' }}>
					<div>{'"' + quote + '"'}</div>
					<div style={{ float: 'right' }}>{'-' + movie}</div>
				</Container>
				<Divider />
				<Header
					textAlign="center"
					style={{
						fontSize: '130%',
						margin: '0 auto'
					}}>
					<b>{user.name}</b>
				</Header>
				<Card.Meta textAlign="center">
					<List horizontal>
						<List.Item>
							<List.Content style={{ textAlign: 'center' }}>
								<b>Movies</b>
								<br />
								{user.numMovies ? user.numMovies : 0}
							</List.Content>
						</List.Item>
						<List.Item>
							<List.Content style={{ textAlign: 'center' }}>
								<b>Average Rating</b>
								<br />
								{user.avgRating ? user.avgRating.toFixed(2) : 0}
							</List.Content>
						</List.Item>
					</List>
				</Card.Meta>
			</Card>
		);
	}
}

export default ProfileDisplay;
