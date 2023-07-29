import React from 'react';
import GreetingCard from './GreetingCard'; // Adjust the path as per your project structure

const App = () => {
  return (
    <div>
      <GreetingCard name="John" greeting="Welcome" />
      <GreetingCard name="Jane" greeting="Greetings" />
      <GreetingCard name="Bob" greeting="Hello" />
    </div>
  );
};

export default App;
