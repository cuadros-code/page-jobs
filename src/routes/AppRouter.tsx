import { 
  BrowserRouter as Router,
  Switch,
  Route,
  } from 'react-router-dom'
import  Nav  from '../components/NavBar'
import { Home, Profile, Login  } from '../screens'
import ProtectedRoute from './ProtectedRoute'
import PublicRouter from './PublicRouter'

const AppRouter = () => {
  return (
    <>
      <Router>
        <Nav />
        <Switch>
          <Route exact path="/" component={Home} />
          <PublicRouter exact isAuth={false} path="/login" component={Login} />
          <ProtectedRoute exact isAuth={false}path="/profile/"component={Profile} />
        </Switch>
      </Router>
    </>
  )
}

export default AppRouter
