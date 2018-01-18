import React, { Component } from 'react';
import { Header, Container } from 'semantic-ui-react';
import MovieCardContent from './MovieCardContent';

class MovieList extends Component {
	constructor(props) {
		super(props);
		// Loading is initially set to true to allow for fetchmovies to return
		// and not immediately cause a re-render
		this.state = { open: false, clicked: null };
	}

	openModal = () => this.setState({ open: true });
	closeModal = () => this.setState({ open: false });

	handleClick = movie => {
		this.setState({ clicked: movie });
	};

	deleteClicked = () => {
		const { clicked } = this.state;

		if (clicked != null) {
			this.props.delClicked(clicked.title);
		}
	};

	// Render a semantic-ui card for each movie in the user's collection
	renderMovies() {
		return this.props.movies.map(movie => {
			return (
				<MovieCardContent
					key={movie.title}
					movie={movie}
					openModal={this.openModal}
					closeModal={this.closeModal}
					open={this.state.open}
					handleClick={this.handleClick}
					deleteClicked={this.deleteClicked}
				/>
			);
		});
	}

	render() {
		const { movies: { length } } = this.props;

		let content = this.renderMovies();

		if (length === 0) {
			const header = "You don't have any movies!";
			content = (
				<Header
					disabled
					textAlign="center"
					style={{
						fontSize: '250%',
						marginTop: '30%'
					}}>
					{header}
					<br />
					<p style={{ fontSize: '20px' }}>
						Search for movies to add to your journal!
					</p>
				</Header>
			);
		}

		return <Container style={{ width: '45vw' }}>{content}</Container>;
	}
}

export default MovieList;
