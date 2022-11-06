import { ITodo } from '../../types/types';
import './styles.css'

interface ITodoProps {
  todo: ITodo;
  deleteTodo: (arg0: string) => void;
}

export const TodoItem = ({ todo, deleteTodo }: ITodoProps) => {
  const handleDelete = () => deleteTodo(todo.id)
  return (
    <li className='list-group-item d-flex justify-content-between align-items-center'>
      <div className=''>
        <span>{todo.title}</span>
      </div>
      <div>
        <button
          style={{ marginRight: '10px' }}
          className='btn btn-primary'
        >
          Изменить
        </button>
        <button
          style={{ marginRight: '10px' }}
          className='btn btn-success'
        >
          Завершить
        </button>
        <button
          onClick={handleDelete}
          className='btn btn-danger'
        >
          Удалить
        </button>

      </div>
    </li>
  )
}