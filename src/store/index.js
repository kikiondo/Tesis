import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk' // Realizar peticiones asincronas
import * as reducers from '../reducers'

// Un ejemplo de middleware  en la pagina de redux xd

const logger = store => next => action => {
  console.log('dispatching', action)
  let result = next(action)
  console.log('next state', store.getState())
  return result
}

export default createStore(combineReducers(reducers), applyMiddleware(logger, thunk))
