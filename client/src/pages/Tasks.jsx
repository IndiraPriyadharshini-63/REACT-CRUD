import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { host, deleteTaskRoute } from "../utils/APIRoutes";
import Navbar from "../components/Navbar";

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
      .delete(deleteTaskRoute + "/" + id)
      .then((result) => {
        console.log(result);
        window.location.reload();
      })
      .catch((err) => console.log(err));
  };
  return (
    <>
      <Navbar />
      <div className=" d-flex flex-column vh-100 justify-content-center align-items-center">
        <div className="vw-100 bg-white p-3 ">
          {/* <Link to="/create" className="btn btn-primary m-2">
            Add Task
          </Link>
          <Link to="/create-event" className="btn btn-primary">
            Create Event
          </Link> */}
          <table className="table table-bordered border-info table-hover align-middle ">
            <thead className="table-info">
              <tr>
                <th>Task</th>
                <th>Start</th>
                <th>End</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody >
              {tasks.map((user) => {
                return (
                  <tr >
                    <td >{user.task}</td>
                    <td>{user.start}</td>
                    <td>{user.end}</td>
                    <td>
                      <Link to={`/update/${user._id}`}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          className="m-2"
                          viewBox="0 0 16 16"
                          color="green"
                        >
                          <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325" />
                        </svg>
                      </Link>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        viewBox="0 0 16 16"
                        color="red"
                        onClick={(e) => handleDelete(user._id)}
                      >
                        <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z" />
                        <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z" />
                      </svg>
                      {/* <button
                        className="btn btn-danger"
                        onClick={(e) => handleDelete(user._id)}
                      >
                        Delete
                      </button> */}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default Tasks;
