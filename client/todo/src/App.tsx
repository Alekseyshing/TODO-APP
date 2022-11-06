import { Header } from './Components/Header/Header'
import { TodoForm } from './Components/TodoForm/TodoForm'
import './App.css'
import { TodoList } from './Components/TodoList/TodoList'

function App() {
  return (
    <>
      <Header />
      <main>
        <section>
          <div className='container pt-3'>
            <TodoForm />
            <h2 className='pt-3'>Новые дела</h2>
            <TodoList />
          </div>
        </section>
      </main>
    </>
  )
}

export default App
