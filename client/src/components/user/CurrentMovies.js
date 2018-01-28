import React from 'react';
import { Card, List, Image } from 'semantic-ui-react';

const CurrentMovies = ({ currentMovies }) => {
  const renderMovies = () => {
    return currentMovies.map(({ title, image, overview }) => {
      return (
        <List.Item style={{ padding: '0 10px 5px 10px' }} key={title}>
          <Image size="mini" src={image} floated="left" />
          <a href={overview} target="_blank">
            {title}
          </a>
        </List.Item>
      );
    });
  };

  return (
    <div>
      <Card style={{ borderRadius: '0' }}>
        <Card.Header
          textAlign="center"
          style={{ fontSize: '130%', margin: '10px 10px' }}
        >
          <b>Top Box Office Movies</b>
        </Card.Header>
        <List style={{ marginTop: '0', maxHeight: '24vh', overflow: 'auto' }}>
          {renderMovies()}
        </List>
      </Card>
    </div>
  );
};

export default CurrentMovies;
