import { useDispatch, useSelector } from 'react-redux'
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import { completeTodo, deleteTodo } from '../../redux/actions'
import { ITodoReducer } from '../../types/types'
import { TodoItem } from '../TodoItem/TodoItem'
import './styles.css'


export const TodoList = () => {
  const state = useSelector((state: ITodoReducer) => state.todoReducer);
  const dispatch = useDispatch();
  const doneTodo = (id: string, done: boolean) => {
    dispatch(completeTodo(id, done))
  }
  const removeTodo = (id: string) => {
    dispatch(deleteTodo(id))
  }
  return (
    <TransitionGroup component='ul' className='list-group'>
      {state.todos?.map(todo => (
        <CSSTransition
          timeout={800}
          classNames={'todo'}
          key={todo?.id}
        >
          <TodoItem
            todo={todo}
            deleteTodo={removeTodo}
            doneTodo={doneTodo}
          />
        </CSSTransition>
      ))}
    </TransitionGroup>
  )
}