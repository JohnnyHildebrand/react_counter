import React,  {Component} from 'react';

export class Counter extends Component {
    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-md-1">
                        <span style={{ fontSize: 24 }} className={this.getBadgeClasses()}>
                            {this.formatCount()}
                        </span>
                    </div>
                    <div className="col-md-2">
                        <button
                            className="btn btn-dark"
                            onClick={() => this.props.onIncrement(this.props.counter)}
                        >
                            <i className="fa fa-plus-circle" aria-hidden="true" />
                        </button>
                        <button
                            className="btn btn-primary m-2"
                            onClick={() => this.props.onDecrement(this.props.counter)}
                            disabled={this.props.counter.value === 0 ? "disabled" : ""}
                        >
                            <i className="fa fa-minus-circle" aria-hidden="true" />
                        </button>
                        <button
                            className="btn btn-danger"
                            onClick={() => this.props.onDelete(this.props.counter.id)}
                        >
                            <i className="fa fa-trash-o" aria-hidden="true" />
                        </button>
                    </div>
                </div>
            </div>
        )
    }

  getBadgeClasses = () => {
    let classes = "badge m=2 text-bg-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
};

formatCount = () => {
    const { value } = this.props.counter;
    return value === 0 ? "Zero" : value;
};

}

export default Counter
