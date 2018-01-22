import React, { Component } from 'react';
import { connect } from 'react-redux';
import MovieList from './movies/MovieList';
import * as actions from '../actions';
import SiteHeader from './SiteHeader';
import { Loader } from 'semantic-ui-react';
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
			<div>
				<SiteHeader />
				<div
					style={{
						backgroundColor: '#f7f7f4',
						position: 'absolute',
						margin: '0 auto',
						width: '100%',
						minHeight: '100%'
					}}>
					{loading ? (
						<Loader active inline="centered" style={{ marginTop: '20%' }} />
					) : (
						<div
							style={{
								marginTop: '15px',
								display: 'grid',
								gridTemplateColumns:
									'minmax(10%, 5%) 195px minmax(500px, 1fr) 195px minmax(10%, 5%)',
								gridTemplateRows: 'minmax(117px, 120px) auto',
								gridGap: '15px'
							}}>
							<div
								style={{
									float: 'right',
									gridColumn: '2',
									gridRow: '1'
								}}>
								<ProfileDisplay user={auth} />
							</div>
							<div style={{ float: 'right', gridColumn: '2', gridRow: '2' }}>
								<SuggestionList movies={movies} />
							</div>
							<div style={{ gridColumn: '3' }}>
								<MovieList movies={movies} delClicked={this.delClicked} />
							</div>
						</div>
					)}
				</div>
			</div>
		);
	}
}

function mapStateToProps({ fetchMovies, auth }) {
	return { movies: fetchMovies, auth };
}

export default connect(mapStateToProps, actions)(Dashboard);
