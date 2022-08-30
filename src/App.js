import './App.css';
import  { Component } from 'react';
import NavBar from './components/NavBar';
import Counters from './components/Counters';



class App extends Component  {
  state = {
    counters : [
      { id: 1, value: 0},
      { id: 2, value: 0},
      { id: 3, value: 0},
      { id: 4, value: 0}
    ]
    };
    handleReset = () => {
      const counters = this.state.counters.map(c => {
        c.value = 0;
         return c; 
        });  
      this.setstate({counters});
    };

    handleIncrement = counter => {
      const counters = [...this.state.counters];
      const index = counters.indexOf(counter);
      counters[index] = { ...counters[index] };
      counters[index].value++;
      this.setState({ counters }); 
    };
    handleDecrement = ()=> {

    };
    handleDelete = ()=> {
      
    };
    handleRestart = ()=> {

    };

    renders()
  {
  return (
    <div className='App'>
      <NavBar totalCounters={this.state.counters.filter(c => c.value > 0).length}></NavBar>
      <Counters 
            counters ={this.state.counters}
            onReset={this.handleReset}
            onIncrement={this.handleIncrement}
            onDecrement={this.handleDecrement}
            onDelete={this.handleDelete}
            onRestart={this.handleRestart}
          ></Counters>
    </div>
  );
}
}
export default App;
