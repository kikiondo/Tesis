import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk' // Realizar peticiones asincronas
import * as reducers from '../reducers'

export default createStore(combineReducers(reducers), applyMiddleware(thunk))
