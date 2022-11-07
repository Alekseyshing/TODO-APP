import { useDispatch } from 'react-redux'
import { getTodos } from './redux/actions'
import { useEffect } from 'react'
import { Header } from './Components/Header/Header'
import { TodoForm } from './Components/TodoForm/TodoForm'
import { TodoList } from './Components/TodoList/TodoList'
import './App.css'

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTodos())
  }, []);

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
