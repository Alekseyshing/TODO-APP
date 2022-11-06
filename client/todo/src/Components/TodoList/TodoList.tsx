import { useSelector } from 'react-redux'
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import { ITodoReducer } from '../../types/types'
import { TodoItem } from '../TodoItem/TodoItem'

export const TodoList = () => {
  const state = useSelector((state: ITodoReducer) => state.todoReducer)
  return (
    <TransitionGroup component='ul' className='list-group'>
      {state.todos?.map(todo => (
        <CSSTransition
          timeout={800}
          classNames={'post'}
          key={todo.id}
        >
          <TodoItem todo={todo} />
        </CSSTransition>
      ))}
    </TransitionGroup>
  )
}