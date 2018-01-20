import React from 'react';
import { Card, List, Header } from 'semantic-ui-react';

const ProfileDisplay = ({ user }) => {
	console.log(user);
	return (
		<Card style={{ borderRadius: '0' }}>
			<Header
				textAlign="center"
				style={{
					fontSize: '130%',
					padding: '5px',
					marginBottom: '0'
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
};

export default ProfileDisplay;
