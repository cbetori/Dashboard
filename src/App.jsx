import React, { Component } from 'react';
import Sidebar from './support/sidebar'
import {Logo} from './support/navbar'
import {Login} from './support/navbar'

import './css/reset.css'
import './App.css';


class App extends Component {
  render() {
    return (
    <div class="App">
      <div className="grid-container">
        <Sidebar/> 
        <Logo/>
        <Login/>
      </div>
    </div>
    );
  }
}

export default App;
