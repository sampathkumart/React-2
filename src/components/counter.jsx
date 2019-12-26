import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
    tags: ["tag1", "tag2", "tag3"]
  };

  handleIncrement = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <React.Fragment>
        <span className={this.badgeClasses()}>{this.counting()}</span>
        <button onClick={this.handleIncrement} className="btn btn-info btn-sm">
          Increment
        </button>
        <ul>
          {this.state.tags.map(tag => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
      </React.Fragment>
    );
  }
  badgeClasses() {
    var classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "danger" : "warning";
    return classes;
  }

  counting() {
    var { count } = this.state;
    return count === 0 ? "Zero" : count;
  }
}
export default Counter;
