import { useContext } from 'react'
import { 
  BrowserRouter as Router,
  Switch,
  Route,
  } from 'react-router-dom'
import  Nav  from '../components/NavBar'
import { AuthContext } from '../context/auth/AuthContext'
import { Home, Profile, Login, Register  } from '../screens'
import ProtectedRoute from './ProtectedRoute'
import PublicRouter from './PublicRouter'

const AppRouter = () => {

  const {authState:{isAuthenticated}} = useContext(AuthContext )


  return (
    <>
      <Router>
        <Nav />
        <Switch>
          <Route exact path="/" component={Home} />
          <PublicRouter exact isAuth={isAuthenticated} path="/login" component={Login} />
          <PublicRouter exact isAuth={isAuthenticated} path="/register" component={Register} />
          <ProtectedRoute exact isAuth={isAuthenticated}path="/profile/"component={Profile} />
        </Switch>
      </Router>
    </>
  )
}

export default AppRouter
