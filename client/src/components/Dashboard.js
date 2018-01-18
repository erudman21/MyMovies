import React from 'react';
import MovieList from './movies/MovieList';
import SiteHeader from './SiteHeader';
import { Container } from 'semantic-ui-react';

const Dashboard = () => {
	return (
		<div>
			<SiteHeader />
			<Container>
				<MovieList />
			</Container>
		</div>
	);
};

export default Dashboard;
