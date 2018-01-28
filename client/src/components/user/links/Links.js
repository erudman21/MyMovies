import React from 'react';
import { Card, List } from 'semantic-ui-react';
import links from './quickLinks';

const Links = () => {
  const renderLinks = () => {
    return links.map(({ name, link }) => {
      return (
        <List.Item style={{ padding: '0 10px 5px 10px' }} key={name}>
          <a href={link} target="_blank">
            {name}
          </a>
        </List.Item>
      );
    });
  };

  return (
    <Card style={{ borderRadius: '0' }}>
      <Card.Header
        textAlign="center"
        style={{ fontSize: '130%', margin: '10px 10px' }}
      >
        <b>Quick Links</b>
      </Card.Header>
      <List style={{ marginTop: '0' }}>{renderLinks()}</List>
    </Card>
  );
};

export default Links;
