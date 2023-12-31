import React from 'react';

const GreetingCard = (props) => {
  // Extracting props
  const { name, greeting } = props;

  return (
    <div className="greeting-card">
      <h2>{greeting}</h2>
      <p>Hello, {name}!</p>
    </div>
  );
};

export default GreetingCard;
