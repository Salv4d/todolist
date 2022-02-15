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
        <NewTodoForm addTodo={this.addTodo} />
        {this.state.todos.map((task) => (
          <Todo task={task.name} key={task.id} />
        ))}
      </div>
    );
  }
}

export default TodoList;
