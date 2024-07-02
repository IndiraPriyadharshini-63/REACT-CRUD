import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import CreateTask from './CreateTask';
import Tasks from './Tasks';
import UpdateTask from './UpdateTask';

function App() {
  return (
  <div>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={< Tasks />}></Route>
        <Route path='/create' element={<CreateTask />}></Route>
        <Route path='/update/:id' element={<UpdateTask />}></Route>
      </Routes>
    </BrowserRouter>
  </div>
  );
}

export default App;
