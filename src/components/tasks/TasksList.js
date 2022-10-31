import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom';
import { deleteTask } from '../../features/tasks/taskSlice'


function TasksList() {
  const tasks = useSelector(state => state.tasks)
  const dispatch = useDispatch();
  const navigate = useNavigate()

  const handleDelete = (id) => {
    dispatch(deleteTask(id));
  }

  const handleEdit = (id) => {
    navigate(`/edit-task/${id}`)
  }
  
  return (
    <div>
      <header>
        <h1>Tasks: {tasks.length}</h1>
        <Link to={'/create-task'}>
          Create Task
        </Link>
      </header>
      {
        tasks.map(task => (
          <div key={task.id} className="task">
            <h1>{task.title}</h1>
            <p>{task.description}</p>
            <div>
              <button onClick={() => handleEdit(task.id)} >Edit</button>
              <button onClick={() => handleDelete(task.id)} >Delete</button>
            </div>
          </div>
        ))
      }
    </div>
  )
}

export default TasksList