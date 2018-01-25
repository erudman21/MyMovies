import React, { Component } from 'react';
import { Image, Card, Divider, Icon } from 'semantic-ui-react';
import DeleteModal from '../modals/DeleteModal';
import ReactStars from 'react-stars';

class MovieCardContent extends Component {
	constructor(props) {
		super(props);

		this.state = { hover: false };
	}

	openEdits = () => this.setState({ hover: true });
	closeEdits = () => this.setState({ hover: false });

	// When the user hovers over a card, an x icon will appear to provide the
	// option to delete the movie that is hovered over
	renderClose = () => {
		const { openModal } = this.props;

		return (
			<div>
				<Icon
					onClick={openModal}
					link
					name="close"
					style={{ position: 'absolute', right: '-3px', top: '-1px' }}
				/>
			</div>
		);
	};

	render() {
		const {
			movie,
			open,
			closeModal,
			handleClick,
			deleteClicked
		} = this.props;

		return (
			<Card
				fluid
				key={movie.title}
				onMouseEnter={this.openEdits}
				onMouseLeave={this.closeEdits}
				style={{ margin: '0 auto 2% auto', borderRadius: '0' }}>
				<Card.Content onClick={() => handleClick(movie)}>
					{this.state.hover ? this.renderClose() : null}
					<Image
						floated="left"
						size="small"
						src={movie.image}
						style={{ margin: 'auto 2% auto 0' }}
					/>
					<div style={{ maxHeight: '30vh', overflow: 'auto' }}>
						<Card.Header
							textAlign="center"
							style={{
								fontSize: '150%',
								lineHeight: '110%'
							}}>
							<b>{movie.title}</b>
						</Card.Header>
						<Divider hidden style={{ margin: '.5% 0' }} />
						<Card.Meta style={{ fontSize: '15px' }}>
							<div>
								Seen:{' '}
								{new Date(movie.dateSeen).toLocaleDateString()}
							</div>
							<Divider hidden style={{ margin: '1% 0' }} />
							Your Rating:
							<ReactStars
								count={10}
								value={movie.personalRating}
								edit={false}
								half
							/>
							<Divider hidden style={{ margin: '1% 0' }} />
							Your Review:<br />
							<div style={{ wordBreak: 'break-all' }}>
								{movie.personalComments}
							</div>
							<DeleteModal
								open={open}
								close={closeModal}
								deleteClicked={deleteClicked}
							/>
						</Card.Meta>
					</div>
				</Card.Content>
			</Card>
		);
	}
}

export default MovieCardContent;
