import {useContext } from 'react'
import { TaskContext } from '../context/Context'

function TaskCard({task }) {
  const { deleteTask } = useContext(TaskContext)
  return (
    <div className="bg-black text-white p-4 rounded-md">
    <h1 className="text-xl font-bold capitalize"> {task.title} </h1>
    <p className='text-blue-500 text-sm'> {task.description} </p>
    <button className='bg-blue-100 px-2 py-1 rounded-md text-black mt-4 hover:bg-blue-700' 
    onClick={ ()=> deleteTask(task.id)}>
      Delete
    </button>
  </div>
  )
}


export default TaskCard