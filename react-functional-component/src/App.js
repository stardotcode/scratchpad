import React, { Component } from 'react';
import './App.css';
import SocialCard from './components/SocialCard';
import People from './people-data';

class App extends Component {
  render() {
    const peopleList = People.map((person, index) =>
      <SocialCard key={index} {...person} />
    );

    return (
      <div className="App">
        <p>A functional (stateless) React component</p>
        {peopleList}
      </div>
    );
  }
}

export default App;
