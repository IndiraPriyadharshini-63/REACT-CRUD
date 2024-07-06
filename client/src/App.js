import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import CreateTask from './pages/CreateTask';
import Tasks from './pages/Tasks';
import UpdateTask from './pages/UpdateTask';
import CreateEvent from './pages/CreateEvent';


function App() {
  return (
  <div>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={< Tasks />}></Route>
        <Route path='/create' element={<CreateTask />}></Route>
        <Route path='/create-event' element={<CreateEvent />}></Route>
        <Route path='/update/:id' element={<UpdateTask />}></Route>
      </Routes>
    </BrowserRouter>
  </div>
  );
}

export default App;
