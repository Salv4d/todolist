import { Component } from "react";

class NewTodoForm extends Component {
  constructor(props) {
    super(props);
    this.state = { todo: "" };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(evt) {
    evt.preventDefault();

    this.props.addTodo(this.state.todo);

    this.state = {
      todo: "",
    };
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
