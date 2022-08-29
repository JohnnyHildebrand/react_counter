import React from "react";
import { Component } from "react";
import Counter from "./Counter";

export class Counters extends Component {
  render() {
    return (
      <div>
1        <button
          className="btn btn-succcess m-2"
          onClick={this.props.onReset}
          disabled={this.props.counters.length === 0 ? "disable" : ""}
            >
           <i className="fa fa-refresh" aria-hidden="true " />
        </button>
        <buttom  className="btn btn-primary m-2"
          onClick={this.props.onRestart}
          disabled={this.props.counters.length === 0 ? "disable" : ""}
             >
                      <i className="fa fa-recycle" aria-hidden="true " />
        </buttom>
           {this.props.counters.map( counter => (
                   <Counter
                      key={counter.id}
                      counter={counter}
                       onIncrement ={this.props.onIncrement}
                      onDecrement={this.props.onDecrement}
                      onDelete={this.props.onDelete}
                />           
        ))}
      </div>
    );
  }
}

export default Counters;
