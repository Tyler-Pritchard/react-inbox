import React, { Component } from 'react';
import './App.css';

import Toolbar from './Components/Toolbar'
import MessageList from './Components/MessageList'

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* put Toolbar first, b/c it's the first one */}
        <Toolbar />
        <MessageList />
      </div>
    );
  }
}

export default App;
