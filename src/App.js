import './App.css';
import NavBar from './components/NavBar';
import Counters from './components/Counters';
import React, { Component } from 'react';


class App extends Component() {
  state = {
    counters : [
      {id:1, value:0},
      {id:2, value:0},
      {id:3, value:0},
      {id:4, value:0}
    ]
    };
  
  
    renders()
  {
  return (
    <div className='App'>
      <NavBar totalCounters="10"></NavBar>
      <Counters counters ={this.state.counters}></Counters>
    </div>
  );
}
}
export default App;
