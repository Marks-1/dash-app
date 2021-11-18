import React from 'react'
import './App.css';
import Joke from './components/Joke';
import Joker from './data'
import Profiles from './components/Profiles';
import Profile from './profiles';

function App() {
  const elements = Joker.map((item) => {
    return <Joke
      key={item.id}
      // setup={item.pun}
      // punchline={item.set}
      item={item}
  />
  })
  const items = Profile.map((item) => {
    return <Profiles
        key={item.id}
        title={item.title}
        description={item.description}
        coverImg={item.coverImg}
        stats={item.stats.rating}
        location={item.location}
  />
  })
  return (
    <div className="App">
      <h2>Hello react</h2>
      {elements}
      {items}
    </div>
  );
}

export default App;
