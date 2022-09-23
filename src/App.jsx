import TaskList from './components/TaskList'
import Tasksform from './components/Tasksform'
function App() {
  return (
    <main className="bg-zinc-900 h-screen p-5">
      <div className="container mx-auto">
        <Tasksform/>
        <TaskList/>
      </div>
    </main>
  )
}

export default App