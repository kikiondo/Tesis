import React, {Component} from 'react'
import { Route, BrowserRouter as Router, Link, Redirect, Switch } from 'react-router-dom'
import { firebaseAuth } from '../data/config'
import Home from './views/public'
import About from './views/public/about'
import ProductList from './views/public/ProductList'
import Error404 from './views/public/Error404'
import { logout } from './helpers/Auth'

const PrivateRoute = ({ component: Component, authed, rest }) => {
  <Route
    {...rest}
    render={
      props => authed === true
      ? <Component {...props} />
      : <Redirect to={ { pathname: '/login', state: { from: props.location } } } />
    }
  />
}

const PublicRoute = ( { component: Component, authed, rest } ) => (
  <Route
    {...rest}
    render={
      props => authed === false
        ? <Component {...props} />
        : <Redirect to='/cursos' />
    }
  />
)

const App = () => {
  return (
    <h1>Hola</h1>
  )
}

export default App
