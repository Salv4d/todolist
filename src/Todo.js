import { Component } from "react";
import "./Todo.css";

class Todo extends Component {
  static defaultProps = {
    task: "hello world of todos",
    complete: false,
  };

  constructor(props) {
    super(props);
    this.state = { hidden: "Todo-hide", task: this.props.task };
    this.handleRemove = this.handleRemove.bind(this);
    this.handleTaskComplete = this.handleTaskComplete.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    this.handleTaskChange = this.handleTaskChange.bind(this);
    this.handleTaskModification = this.handleTaskModification.bind(this);
  }

  handleRemove() {
    this.props.removeTodo(this.props.id);
  }

  handleEdit() {
    this.props.handleEdit(this.props.id);
  }

  handleTaskComplete(evt) {
    this.props.toggleTodo({
      id: this.props.id,
      name: this.props.task,
      complete: evt.target.checked,
    });
  }

  handleTaskChange(evt) {
    this.setState(() => ({ task: evt.target.value }));
  }

  handleTaskModification(evt) {
    if (evt.keyCode === 13) {
      this.props.editTodo({
        complete: this.props.complete,
        id: this.props.id,
        name: this.state.task,
      });

      evt.target.blur();
    }
  }

  render() {
    const { id, task, complete, editMode } = this.props;

    const completed = complete ? "Todo-completed" : "";

    return (
      <div className="Todo">
        <label htmlFor={id} className={`${completed}`}>
          <input
            type="checkbox"
            id={id}
            name={task}
            onChange={this.handleTaskComplete}
          />
          <input
            className="Todo-task"
            type="text"
            value={this.state.task}
            onChange={this.handleTaskChange}
            onKeyUp={this.handleTaskModification}
          />
        </label>
        <button onClick={this.handleRemove}>x</button>
      </div>
    );
  }
}

export default Todo;
