import React, { Component } from "react";
import { MDBBtn, MDBCol, MDBContainer, MDBAlert } from "mdbreact";
import "./index.css";
import TaskList from "./TaskList";

class App extends Component {
  state = {
    tasks: [],
    error: false
  };
  handleAdd = () => {
    const newTask = {
      name: "Task number",
      number: this.state.tasks.length + 1
    };
    const newTasks = [...this.state.tasks, newTask];
    this.setState({
      tasks: newTasks,
      error: false
    });
  };
  handleRemove = () => {
    if (this.state.tasks.length > 0) {
      let tasksCopy = this.state.tasks;
      tasksCopy.pop();
      this.setState({
        tasks: tasksCopy,
        error: false
      });
    } else {
      this.setState({
        error: true
      });
    }
  };
  handleClear = () => {
    if (this.state.tasks.length > 0) {
      this.setState({
        tasks: [],
        error: false
      });
    } else {
      this.setState({
        error: true
      });
    }
  };
  render() {
    return (
      <MDBContainer>
        <MDBCol className="text-center">
          {this.state.error ? (
            <MDBAlert color="warning">List is empty. Add task.</MDBAlert>
          ) : null}
          <MDBBtn onClick={this.handleAdd} target="blank" color="primary">
            <strong>ADD</strong>
          </MDBBtn>
          <MDBBtn onClick={this.handleRemove} target="blank" color="warning">
            <strong>Remove</strong>
          </MDBBtn>
          <MDBBtn onClick={this.handleClear} target="blank" color="danger">
            <strong>Clear</strong>
          </MDBBtn>
        </MDBCol>
        <TaskList {...this.state} />
      </MDBContainer>
    );
  }
}

export default App;
