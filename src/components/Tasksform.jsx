import {useState, useContext} from 'react'
import {TaskContext} from '../context/Context'

function Tasksform({}) {
    const [title, settitle] = useState('')
    const [description, setdescription] = useState('')
    const { createTask } = useContext(TaskContext)

    const handleSubmit = (e) =>{
      e.preventDefault();
      createTask({title, 
        description})
      settitle('')
      setdescription('')
    };
  return (
    <div className='max-w-md mx-auto'>
        <form onSubmit={handleSubmit} className='bg-zinc-800 p-3 mb-4' >
            <h1 className='text-2xl font-bold text-white pb-3 text-center' >Area de tareas</h1>
            <input placeholder= "Tarea: " className='bg-slate-300 p-3 w-full mb-2'
            onChange={ function(e) {settitle(e.target.value)}}  value={title} autoFocus />
            <textarea placeholder= "Descripcion: " 
            onChange={ function(e) {setdescription(e.target.value)}} value={description} 
            className='bg-slate-300 p-3 w-full mb-2' ></textarea>
            <button className='bg-blue-800 text-white px-2 py-2 hover:bg-blue-300 hover:text-black ' >Save</button>
        </form>
    </div>
  )
}
export default Tasksform