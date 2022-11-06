import { Provider } from 'react-redux'
import { createStore } from 'redux'
import ReactDOM from 'react-dom/client'
import App from './App'
import { rootReducer } from './redux/rootReducer'


const store = createStore(rootReducer)

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Provider store={store}>
    <App />
  </Provider>
)
