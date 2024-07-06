import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { host, deleteTaskRoute } from "../utils/APIRoutes";

function Tasks() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    axios
      .get(host)
      .then((result) => setTasks(result.data))
      .catch((err) => console.log(err));
  }, []);

  const handleDelete = (id) => {
    axios
      .delete(deleteTaskRoute+"/"+ id)
      .then((result) => {
        console.log(result);
        window.location.reload();
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className=" d-flex vh-100 bg-primary justify-content-center align-items-center">
      <div className="w-50 bg-white rounded p-3 ">
        <Link to="/create" className="btn btn-primary m-2">
          Add Task
        </Link>
        <Link to="/create-event" className="btn btn-primary">
          Create Event
        </Link>
        <table className="table">
          <thead>
            <tr>
              <th>Task</th>
              <th>Start</th>
              <th>End</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {tasks.map((user) => {
              return (
                <tr>
                  <td>{user.task}</td>
                  <td>{user.start}</td>
                  <td>{user.end}</td>
                  <td>
                    <Link
                      to={`/update/${user._id}`}
                      className="btn btn-success"
                    >
                      Update
                    </Link>
                    <button
                      className="btn btn-danger"
                      onClick={(e) => handleDelete(user._id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Tasks;
