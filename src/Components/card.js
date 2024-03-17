// Card.js

import React from 'react';

const Card = ({ color, title, content }) => {
  const cardStyle = {
    backgroundColor: color,
    padding: '20px',
    margin: '10px',
    borderRadius: '10px',
    width: '200px',
    textAlign: 'center',
  };

  return (
    <div style={cardStyle}>
      <h2>{title}</h2>
      <p>{content}</p>
    </div>
  );
};

export default Card;
