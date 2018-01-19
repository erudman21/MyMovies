import React from 'react';
import { Card, List } from 'semantic-ui-react';

const ProfileDisplay = ({ user }) => {
	return (
		<Card style={{ borderRadius: '0' }}>
			<Card.Header
				textAlign="center"
				style={{ fontSize: '130%', padding: '5px' }}>
				<b>{user.name}</b>
			</Card.Header>
			<Card.Meta textAlign="center">
				<List horizontal>
					<List.Item>
						<List.Content style={{ textAlign: 'center' }}>
							<b>Movies</b>
							<br />
							{user.numMovies}
						</List.Content>
					</List.Item>
					<List.Item>
						<List.Content style={{ textAlign: 'center' }}>
							<b>Average Rating</b>
							<br />
							{user.avgRating}
						</List.Content>
					</List.Item>
				</List>
			</Card.Meta>
		</Card>
	);
};

export default ProfileDisplay;
