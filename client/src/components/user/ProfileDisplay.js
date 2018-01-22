import React from 'react';
import { Card, List, Header } from 'semantic-ui-react';

const ProfileDisplay = ({ user }) => {
	return (
		<Card style={{ borderRadius: '0' }}>
			<div style={{ overflow: 'hidden' }}>
				<img
					src={require('../../media/film-roll.png')}
					style={{ width: '110%', marginLeft: '-5%' }}
					alt="film-roll"
				/>
			</div>
			<Header
				textAlign="center"
				style={{
					fontSize: '130%',
					margin: '0 auto'
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
