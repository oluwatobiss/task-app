import React, {Component} from "react";
import ListMaker from "./ListMaker";
import uniqid from "uniqid";

class App extends Component {
  constructor() {
    super();
    this.state = {
      task: {input: "", id: uniqid()},
      tasks: []
    };
  }

  handleChange = (e) => {
    const {name, value} = e.target
    this.setState({[name]: {input: value, id: this.state.task.id}});
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState((curr) => {
      const currentState = {...curr};
      const newTask = [...currentState.tasks, this.state.task];
      return {task: {input: "", id: uniqid()}, tasks: newTask};
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <h2>Enter a Task:</h2>
          <input type="text" value={this.state.task.input} name="task" onChange={this.handleChange} />
          <button type="submit">Submit</button>
        </form>
        <h3>{this.state.task.input ? `▶ You input is: ${this.state.task.input}` : "▶"}</h3>
        <ul><ListMaker items={this.state.tasks} /></ul>
      </div>
    );
  }
}

export default App;