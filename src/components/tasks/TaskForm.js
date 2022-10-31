import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { v4 as uuid} from 'uuid'
import { addTask, updateTask } from '../../features/tasks/taskSlice';


function TaskForm() {

  const [task, setTask] = useState({
    title:'',
    description: '',
  });
  const tasks = useSelector(state => state.tasks)
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const params = useParams();

  useEffect(()=>{
    if (params) {
      setTask(
        tasks.find(task => task.id == params.id)
      );
    }
  },[])

  const handleChange = ( e ) => {
    setTask({
      ...task,
      [e.target.name]: e.target.value
    });
  }

  const handleSubmit = (e) =>{
    e.preventDefault();
    if (params.id) {
      dispatch(updateTask(task))
    } else {
      dispatch(addTask({
        ...task,
        id:uuid(),
        completed:false
        }));
    }
    navigate('/')
  }
 
  return (
    <form>
      <h1>Task Form</h1>
      <div>
        <label>Title</label>
        <input type='text' value={task ? task.title : ''} name='title' placeholder='title' onChange={handleChange} />
      </div>
      <div>
        <label>Description</label>
        <textarea name='description' value={task ? task.description : ''} placeholder='Description' onChange={handleChange}></textarea>
      </div>
      <input type='submit' onClick={handleSubmit}></input>
    </form>
  )
}

export default TaskForm