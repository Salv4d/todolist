import { Component } from "react";
import Todo from "./Todo";
import NewTodoForm from "./NewTodoForm";
import { v4 as uuidv4 } from "uuid";

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = { todos: new Array() };
    this.addTodo = this.addTodo.bind(this);
    this.removeTodo = this.removeTodo.bind(this);
  }

  addTodo(newTodo) {
    this.setState((st) => ({
      todos: [...st.todos, { ...newTodo, id: uuidv4() }],
    }));
  }

  removeTodo(todoId) {
    this.setState((st) => ({
      todos: st.todos.filter((task) => task.id != todoId),
    }));
  }

  render() {
    return (
      <div className="TodoList">
        <NewTodoForm addTodo={this.addTodo} />
        {this.state.todos.map((task) => (
          <Todo
            task={task.name}
            key={task.id}
            id={task.id}
            removeTodo={this.removeTodo}
          />
        ))}
      </div>
    );
  }
}

export default TodoList;
