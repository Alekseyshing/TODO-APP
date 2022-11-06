export enum ITodoActionTypes {
  CREATE_TODO = 'CREATE_TODOS',
  GET_TODO = 'GET_TODOS',
  CHANGE_TODO = 'CHANGE_TODO',
  COMPLETE_TODO = 'COMPLETE_TODO',
  DELETE_TODO = 'DELETE_TODO'
}

export interface ITodo {
  id: string,
  title: string,
  done: boolean
}

export interface ITodoState {
  todos: ITodo[]
}

export interface ITodoReducer {
  todoReducer: ITodoState
}

export interface ICreateAction {
  type: ITodoActionTypes.CREATE_TODO,
  payload: string
}

export type ITodoAction = ICreateAction