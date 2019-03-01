import React from "react";
import { MDBCol, MDBContainer } from "mdbreact";
import "./TaskList.css";

function TaskList({ tasks }) {
  const task = tasks.map(task => (
    <li className="lead" key={task.number}>
      {task.name} {task.number}
    </li>
  ));
  return (
    <MDBContainer>
      <MDBCol className="text-center">
        <ul>{task}</ul>
      </MDBCol>
    </MDBContainer>
  );
}
export default TaskList;
