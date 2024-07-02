import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { updateTaskRoute, getTaskRoute } from "./utils/APIRoutes";

function UpdateTask() {
  const { id } = useParams();
  const [task, setTask] = useState();
  const [start, setStart] = useState();
  const [end, setEnd] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(getTaskRoute + "/" + id)
      .then((result) => {
        console.log(result);
        setTask(result.data.task);
        setStart(result.data.start);
        setEnd(result.data.end);
      })
      .catch((err) => console.log(err));
    // eslint-disable-next-line
  }, []);

  const Update = (e) => {
    e.preventDefault();
    axios
      .put(updateTaskRoute + "/" + id, { task, start, end })
      .then((result) => {
        console.log(result);
        navigate("/");
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
      <div className="v-50 bg-white rounded p-3">
        <form onSubmit={Update}>
          <h2>Update Tasks</h2>
          <div className="mb-2">
            <label htmlFor="">Task</label>
            <input
              type="text"
              placeholder="Task name"
              className="form-control"
              value={task}
              onChange={(e) => setTask(e.target.value)}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="">Start</label>
            <input
              type="datetime-local"
              placeholder="Start"
              className="form-control"
              value={start}
              onChange={(e) => setStart(e.target.value)}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="">End</label>
            <input
              type="datetime-local"
              placeholder="End"
              className="form-control"
              value={end}
              onChange={(e) => setEnd(e.target.value)}
            />
          </div>
          <button className="btn btn-success"> Update</button>
        </form>
      </div>
    </div>
  );
}

export default UpdateTask;
