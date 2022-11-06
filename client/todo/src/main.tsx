import createSagaMiddleware from 'redux-saga'
import { applyMiddleware, compose, createStore } from 'redux'
import { Provider } from 'react-redux'
import ReactDOM from 'react-dom/client'
import App from './App'
import { rootReducer } from './redux/rootReducer'
import { sagaWatcher } from './redux/saga/sagas'

const saga = createSagaMiddleware();
const store = createStore(rootReducer, compose(applyMiddleware(saga)));
saga.run(sagaWatcher);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Provider store={store}>
    <App />
  </Provider>
)
