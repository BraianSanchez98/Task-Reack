import TaskCard from './TaskCard'
import { TaskContext } from '../context/Context'
import { useContext } from 'react'

function TaskList() {
  const { tasks } =useContext(TaskContext)

  if (tasks.length === 0 ){
    return <h2 className='text-white text-center text-3xl'>No hay tareas </h2>
  }
  return (
    <div className="grid grid-cols-4 gap-2 p-4">
      {tasks.map((task => (
        <TaskCard key={task.id} task={task}  />
        )))}
    </div>
  )
}

export default TaskList