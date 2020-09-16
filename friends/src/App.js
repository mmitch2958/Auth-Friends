import React, { Component } from 'react';
import Friends from './components/Friends.js';
import CreateFriendForm from './components/Login.js';
import UpdateFriendForm from './components/PrivateRoute.js';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1> Friends App </h1>
        <Friends />
        <CreateFriendForm />
        <UpdateFriendForm />
      </div>
    );
  }
}

export default App;