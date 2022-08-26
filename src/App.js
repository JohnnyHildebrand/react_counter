import './App.css';
import NavBar from './components/NavBar';
import 'font-awesome/css/font-awesome.css';
import { FaShoppingCart } from "react-icons/fa";


import React from 'react'

function App() {
  return (
    <div className='App'>
      <NavBar totalCounters="10"></NavBar>
    </div>
  )
}

export default App
