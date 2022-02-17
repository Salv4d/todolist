import { Component } from "react";
import Todo from "./Todo";
import NewTodoForm from "./NewTodoForm";
import { v4 as uuidv4 } from "uuid";
import "./TodoList.css";
import { TransitionGroup, CSSTransition } from "react-transition-group";

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = { todos: new Array() };
    this.addTodo = this.addTodo.bind(this);
    this.removeTodo = this.removeTodo.bind(this);
    this.toggleTodo = this.toggleTodo.bind(this);
    this.changeTodo = this.changeTodo.bind(this);
  }

  addTodo(newTodo) {
    this.setState((st) => ({
      todos: [...st.todos, { ...newTodo, id: uuidv4() }],
    }));
  }

  removeTodo(todoId) {
    this.setState((st) => ({
      todos: st.todos.filter((task) => task.id !== todoId),
    }));
  }

  changeTodo(newTodo) {
    this.setState((st) => {
      let todoList = st.todos;
      let todo = todoList.find((task) => task.id === newTodo.id);
      Object.assign(todo, newTodo);
      return { todos: todoList };
    });
  }

  toggleTodo(todo) {
    const todoList = [
      ...this.state.todos.filter((task) => task.id !== todo.id),
      todo,
    ];
    this.setState((st) => ({
      todos: todoList.sort((a, b) => a.complete - b.complete),
    }));
  }

  render() {
    return (
      <div className="TodoList">
        <h1>To-do List</h1>
        <TransitionGroup className="TodoList-wrapper">
          <NewTodoForm className="TodoList-form" addTodo={this.addTodo} />
          {this.state.todos.map((task) => (
            <CSSTransition key={task.id} classNames="TodoList" timeout={300}>
              <Todo
                task={task.name}
                id={task.id}
                complete={task.complete}
                removeTodo={this.removeTodo}
                toggleTodo={this.toggleTodo}
                editTodo={this.changeTodo}
              />
            </CSSTransition>
          ))}
        </TransitionGroup>
      </div>
    );
  }
}

export default TodoList;
