import { Component } from "react";
import Todo from "./Todo";
import NewTodoForm from "./NewTodoForm";

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = { todos: new Array() };
  }

  render() {
    return (
      <div className="TodoList">
        {this.state.todos.map((task) => (
          <Todo task={task} />
        ))}
        <NewTodoForm />
      </div>
    );
  }
}

export default TodoList;
