import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { Button, Container } from 'semantic-ui-react';
import * as actions from '../../../actions';
import PrefilledDisplay from './prefilledDisplay/PrefilledDisplay';
import PersonalFields from './PersonalFields';
import moment from 'moment';

class MovieForm extends Component {
	constructor(props) {
		super(props);

		this.state = {
			dateSeen: moment(),
			personalRating: 0,
			personalComments: ''
		};
	}

	onDateChange = date => this.setState({ dateSeen: date });
	onRatingChange = rating => this.setState({ personalRating: rating });
	onCommentsChange = (e, { value }) =>
		this.setState({ personalComments: value });

	submit = () => {
		const { addMovie, history, movieData } = this.props;
		const { dateSeen, personalRating, personalComments } = this.state;

		const values = {
			title: movieData.Title,
			image: movieData.Poster,
			officialRatings: movieData.Ratings,
			year: movieData.Year,
			director: movieData.Director,
			dateSeen: new Date(dateSeen._d),
			personalRating,
			personalComments
		};

		// Add the movie to the user's collection with a combination of personal
		// fields and automatically filled fields from the movie's data
		addMovie(values, history);
	};

	renderPersonalFields() {
		const { dateSeen, personalRating, personalComments } = this.state;
		return (
			<PersonalFields
				dateSeen={dateSeen}
				onDateChange={this.onDateChange}
				personalRating={personalRating}
				onRatingChange={this.onRatingChange}
				personalComments={personalComments}
				onCommentsChange={this.onCommentsChange}
			/>
		);
	}

	render() {
		const { movieData } = this.props;

		return (
			<Container style={{ marginTop: '15px' }} >
				<PrefilledDisplay movieData={movieData} />
				<Container style={{ padding: '1.5% 0' }}>
					{this.renderPersonalFields()}
				</Container>
				<Button href="/movies" color="red">
					Cancel
				</Button>
				<Button onClick={this.submit} floated="right" color="blue">
					Add Movie!
				</Button>
			</Container>
		);
	}
}

function mapStateToProps(state) {
	return { movieData: state.loadMovieDataFull };
}

export default connect(mapStateToProps, actions)(withRouter(MovieForm));
