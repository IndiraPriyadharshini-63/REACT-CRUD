import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { createTaskRoute } from '../utils/APIRoutes'

function CreateTask() {
  const [task, setTask] = useState();
  const [start, setStart] = useState();
  const [end, setEnd] = useState();
  const navigate = useNavigate();

  const Submit = (e) => {
    e.preventDefault();
    axios
      .post(createTaskRoute, { task, start, end })
      .then((result) => {
        console.log(result);
        navigate("/");
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
      <div className="v-50 bg-white rounded p-3">
        <form onSubmit={Submit}>
          <h2>Add Task</h2>
          <div className="mb-2">
            <label htmlFor="">Task</label>
            <input
              type="text"
              placeholder="Task name"
              className="form-control"
              onChange={(e) => setTask(e.target.value)}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="">Start</label>
            <input
              type="datetime-local"
              placeholder="Start"
              className="form-control"
              onChange={(e) => setStart(e.target.value)}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="">End</label>
            <input
              type="datetime-local"
              placeholder="End"
              className="form-control"
              onChange={(e) => setEnd(e.target.value)}
            />
          </div>
          <button className="btn btn-success"> Submit</button>
        </form>
      </div>
    </div>
  );
}

export default CreateTask;
