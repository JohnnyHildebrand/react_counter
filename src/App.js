import './App.css';
import NavBar from './components/NavBar';
import 'font-awesome/css/font-awesome.css';
import Counter from './components/Counter';


import React from 'react'

function App() {
  return (
    <div className='App'>
      <NavBar totalCounters="10"></NavBar>
      <Counter counter= "10"></Counter>
    </div>
  )
}

export default App
