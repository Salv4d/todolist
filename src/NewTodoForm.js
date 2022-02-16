import { Component } from "react";
import "./NewTodoForm.css";

class NewTodoForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todo: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(evt) {
    evt.preventDefault();

    const newTodo = { name: this.state.todo, complete: false };

    this.props.addTodo(newTodo);

    this.setState(() => ({ todo: "" }));
  }

  handleChange(evt) {
    this.setState(() => ({ todo: evt.target.value }));
  }

  render() {
    return (
      <form className="NewTodoForm" onSubmit={this.handleSubmit}>
        <input
          className="NewTodoForm-input"
          type="text"
          value={this.state.todo}
          onChange={this.handleChange}
          placeholder="hmm... My new task is..."
        />
        <button>Add</button>
      </form>
    );
  }
}

export default NewTodoForm;
