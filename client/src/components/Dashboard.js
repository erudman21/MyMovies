import React, { Component } from 'react';
import { connect } from 'react-redux';
import MovieList from './movies/MovieList';
import { fetchMovies, deleteMovie } from '../actions/index';
import SiteHeader from './SiteHeader';
import { Container, Loader } from 'semantic-ui-react';
import SuggestionList from './movies/SuggestionList';

class Dashboard extends Component {
	constructor(props) {
		super(props);

		this.state = {
			loading: true,
			movies: []
		};
	}

	// Delete whatever clicked is set to in state
	delClicked = movie => {
		const { deleteMovie, fetchMovies } = this.props;

		this.setState({ loading: true });
		deleteMovie({ title: movie }).then(() => {
			fetchMovies().then(() => {
				this.setState({ open: false, loading: false });
			});
		});
	};

	componentDidMount = () => {
		this.props.fetchMovies().then(() => {
			this.setState({ loading: false });
		});
	};

	render() {
		const { movies } = this.props;
		const { loading } = this.state;

		return (
			<div
				style={{
					backgroundColor: '#f7f7f4',
					position: 'absolute',
					width: '100%',
					minHeight: '100%'
				}}>
				<SiteHeader />
				{loading ? (
					<Loader
						active
						inline="centered"
						style={{ marginTop: '20%' }}
					/>
				) : (
					<Container>
						<SuggestionList movies={movies} />
						<MovieList
							movies={movies}
							delClicked={this.delClicked}
						/>
					</Container>
				)}
			</div>
		);
	}
}

function mapStateToProps({ fetchMovies }) {
	return { movies: fetchMovies };
}

export default connect(mapStateToProps, { fetchMovies, deleteMovie })(
	Dashboard
);
