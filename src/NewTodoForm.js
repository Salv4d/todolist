import { Component } from "react";

class NewTodoForm extends Component {
  render() {
    return (
      <div className="NewTodoForm">
        <form>
          <input type="text" />
          <button>Add todo</button>
        </form>
      </div>
    );
  }
}

export default NewTodoForm;
