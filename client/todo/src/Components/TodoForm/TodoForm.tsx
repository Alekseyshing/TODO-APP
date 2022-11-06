import { ChangeEvent, FormEvent, useState } from 'react';
import { useDispatch } from 'react-redux'
import { createTodo } from '../../redux/actions';

export const TodoForm = () => {
  const [title, setTitle] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!title.trim()) {
      return
    };

    dispatch(createTodo(title));
    setTitle('')
  }

  const handleChangeInputValue = (event: ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value)
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3 d-flex align-items-end justify-content-between">
        <div style={{ width: '92%', marginRight: '10px' }}>
          <label htmlFor="" className="form-label">Введите название дела</label>
          <input
            type="text"
            className="form-control"
            onChange={handleChangeInputValue}
          />
        </div>
        <button className="btn btn-success">создать</button>
      </div>
    </form>
  )
}