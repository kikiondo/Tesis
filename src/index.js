import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import registerServiceWorker from './registerServiceWorker'
import App from './components/'
import store from './store/index.js'
import { Provider } from 'react-redux'
import { loadProducts } from './actionCreator'

// Despachamos la acción
store.dispatch(loadProducts())

// Envuelvo el componente y lo paso por parametro
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  ,
  document.getElementById('root'))

registerServiceWorker()
