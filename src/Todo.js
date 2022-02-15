import { Component } from "react";

class Todo extends Component {
  static defaultProps = {
    task: "hello world of todos",
  };

  render() {
    return <div className="Todo">{this.props.task}</div>;
  }
}

export default Todo;
