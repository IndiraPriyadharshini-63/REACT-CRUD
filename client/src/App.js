import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import CalendarComponent from "./pages/CalendarComponent";
import CreateTask from "./pages/CreateTask";
import Tasks from "./pages/Tasks";
import UpdateTask from "./pages/UpdateTask";
import Files from "./pages/Files";
import SignUp from "./components/SignUp";
import Login from "./components/Login";

function App() {
  const isLoggedIn = window.localStorage.getItem("loggedIn");
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={isLoggedIn === "true"? <Tasks /> : <Login />}></Route>
          <Route path="/tasks" element={<Tasks />}></Route>
          <Route path="/create" element={<CreateTask />}></Route>
          <Route path="/create-event" element={<CalendarComponent />}></Route>
          <Route path="/update/:id" element={<UpdateTask />}></Route>
          <Route path="/files" element={<Files />}></Route>
          <Route path="/register" element={<SignUp />}></Route>
          <Route path="/login" element={<Login />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
