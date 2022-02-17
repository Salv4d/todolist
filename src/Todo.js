import { Component } from "react";
import "./Todo.css";

class Todo extends Component {
  static defaultProps = {
    task: "hello world of todos",
    complete: false,
  };

  constructor(props) {
    super(props);
    this.state = { hidden: "Todo-hide" };
    this.handleRemove = this.handleRemove.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
  }

  handleRemove() {
    this.props.removeTodo(this.props.id);
  }

  handleEdit() {
    this.props.handleEdit(this.props.id);
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

    const completed = complete ? "Todo-completed" : "";

    return (
      <div className="Todo">
        <label htmlFor={id} className={`${completed}`}>
          <input
            type="checkbox"
            id={id}
            name={task}
            onChange={this.handleChange}
          />
          {task}
        </label>
        <div>
          <button>Edit</button>
          <button onClick={this.handleRemove}>x</button>
        </div>
      </div>
    );
  }
}

export default Todo;
