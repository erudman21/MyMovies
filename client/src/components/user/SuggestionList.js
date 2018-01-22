import React from 'react';
import { List, Card, Header } from 'semantic-ui-react';

const SuggestionList = ({ movies }) => {
	const renderList = () => {
		return movies.map(movie => {
			return movie.recs.map(rec => {
				return (
					<List.Item style={{ padding: '0 10px 5px 10px' }} key={rec.name}>
						<a href={rec.link}>{rec.name}</a>
					</List.Item>
				);
			});
		});
	};

	return (
		<Card style={{ borderRadius: '0' }}>
			<Card.Header
				textAlign="center"
				style={{ fontSize: '130%', margin: '10px 10px' }}>
				<b>Suggested movies for you</b>
			</Card.Header>
			{movies.length > 0 ? (
				<List style={{ marginTop: '0' }}>{renderList()}</List>
			) : (
				<Header
					disabled
					textAlign="center"
					style={{
						fontSize: '100%',
						margin: '5px auto'
					}}>
					Add movies to your list to receive suggestions!
				</Header>
			)}
		</Card>
	);
};

export default SuggestionList;
