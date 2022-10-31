import TasksList from './components/tasks/TasksList';
import TaskForm from './components/tasks/TaskForm';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<TasksList />} />
          <Route path='/create-task' element={<TaskForm />} />
          <Route path="edit-task/:id" element={<TaskForm />}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
