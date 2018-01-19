import React from 'react';
import { List, Card } from 'semantic-ui-react';

const SuggestionList = ({ movies }) => {
	const renderList = () => {
		return movies.map(movie => {
			return movie.recs.map(rec => {
				return (
					<List.Item
						style={{ padding: '0 10px 5px 10px' }}
						key={rec.name}>
						<a href={rec.link}>{rec.name}</a>
					</List.Item>
				);
			});
		});
	};

	return (
		<Card style={{ borderRadius: '0' }}>
			<Card.Header style={{ fontSize: '130%', margin: '15px 10px' }}>
				<b>Suggested for you</b>
			</Card.Header>
			<List style={{ marginTop: '0' }}>{renderList()}</List>
		</Card>
	);
};

export default SuggestionList;
