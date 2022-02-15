import { Component } from "react";

class Todo extends Component {
  static defaultProps = {
    task: "hello world of todos",
  };

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const { id } = this.props;

    this.props.removeTodo(id);
  }

  render() {
    return (
      <div className="Todo">
        {this.props.task}
        <button onClick={this.handleClick}>x</button>
      </div>
    );
  }
}

export default Todo;
