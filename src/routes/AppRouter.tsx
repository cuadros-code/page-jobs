import { FunctionComponent } from 'react'
import { 
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
  } from 'react-router-dom'
import  Nav  from '../components/NavBar'
import Home from '../screens/Home'
import Login from '../screens/Login'
import Register from '../screens/Register'
import PublicRouter from './PublicRouter'

const AppRouter = () => {
  return (
    <>
      <Router>
        <Nav />
        <Switch>
          <Route exact path="/"  component={Home} />
          <PublicRouter 
            exact
            isAuth={false}
            path="/auth" 
            component={PublicRouterContainer} 
          />

        </Switch>
      </Router>
    </>
  )
}

export default AppRouter

const PublicRouterContainer: FunctionComponent = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/auth/login" component={Login} />
        <Route exact path="/auth/register" component={Register} />
        <Redirect to="/auth/login" />
      </Switch>
    </div>
  )
}