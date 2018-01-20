import React, { Component } from 'react';
import { connect } from 'react-redux';
import MovieList from './movies/MovieList';
import * as actions from '../actions';
import SiteHeader from './SiteHeader';
import { Container, Loader } from 'semantic-ui-react';
import SuggestionList from './user/SuggestionList';
import ProfileDisplay from './user/ProfileDisplay';

class Dashboard extends Component {
	constructor(props) {
		super(props);

		this.state = {
			loading: true
		};
	}

	// Delete whatever clicked is set to in state
	delClicked = movie => {
		const { deleteMovie, fetchMovies } = this.props;

		this.setState({ loading: true });
		deleteMovie({ movie }).then(() => {
			fetchMovies().then(() => {
				this.setState({ open: false, loading: false });
			});
		});
	};

	componentDidMount = () => {
		this.props.fetchUser();
		this.props.fetchMovies().then(() => {
			this.setState({ loading: false });
		});
	};

	render() {
		const { movies, auth } = this.props;
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
						<Container
							style={{
								float: 'left',
								width: '18%',
								paddingRight: '15px',
								display: 'inline-block'
							}}>
							<ProfileDisplay user={auth} />
							<SuggestionList movies={movies} />
						</Container>
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

function mapStateToProps({ fetchMovies, auth }) {
	return { movies: fetchMovies, auth };
}

export default connect(mapStateToProps, actions)(Dashboard);
