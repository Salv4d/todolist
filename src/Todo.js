import { Component } from "react";

class Todo extends Component {
  static defaultProps = {
    task: "hello world of todos",
    complete: false,
  };

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleClick() {
    this.props.removeTodo(this.props.id);
  }

  handleChange(evt) {
    this.props.toggleTodo({
      id: this.props.id,
      name: this.props.task,
      complete: evt.target.checked,
    });
  }

  render() {
    const { id, task, complete } = this.props;
    return (
      <div className="Todo">
        <label htmlFor={id}>
          {task}
          <input
            type="checkbox"
            id={id}
            name={task}
            onChange={this.handleChange}
          />
        </label>
        <button onClick={this.handleClick}>x</button>
      </div>
    );
  }
}

export default Todo;
