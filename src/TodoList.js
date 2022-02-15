import { Component } from "react";
import Todo from "./Todo";
import NewTodoForm from "./NewTodoForm";

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = { todos: new Array() };
    this.addTodo = this.addTodo.bind(this);
  }

  addTodo(newTodo) {
    this.setState((st) => ({ todos: [...st.todos, newTodo] }));
  }

  render() {
    return (
      <div className="TodoList">
        {this.state.todos.map((task) => (
          <Todo task={task} />
        ))}
        <NewTodoForm addTodo={this.addTodo} />
      </div>
    );
  }
}

export default TodoList;
