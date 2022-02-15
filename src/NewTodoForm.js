import { Component } from "react";
import { v4 as uuidv4 } from "uuid";

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

    const newTodo = { name: this.state.todo, complete: false, id: uuidv4() };

    this.props.addTodo(newTodo);

    this.setState(() => ({ todo: "" }));
  }

  handleChange(evt) {
    this.setState(() => ({ todo: evt.target.value }));
  }

  render() {
    return (
      <div className="NewTodoForm">
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            value={this.state.todo}
            onChange={this.handleChange}
          />
          <button>Add todo</button>
        </form>
      </div>
    );
  }
}

export default NewTodoForm;
