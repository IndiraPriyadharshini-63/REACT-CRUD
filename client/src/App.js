import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import CalendarComponent from './pages/CalendarComponent';
import CreateTask from './pages/CreateTask';
import Tasks from './pages/Tasks';
import UpdateTask from './pages/UpdateTask';


function App() {
  return (
  <div>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={< Tasks />}></Route>
        <Route path='/create' element={<CreateTask />}></Route>
        <Route path='/create-event' element={<CalendarComponent />}></Route>
        <Route path='/update/:id' element={<UpdateTask />}></Route>
      </Routes>
    </BrowserRouter>
  </div>
  );
}

export default App;
