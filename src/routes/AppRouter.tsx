import { useContext, useEffect } from 'react'
import { 
  BrowserRouter as Router,
  Switch,
  Route,
  } from 'react-router-dom'
import  Nav  from '../components/NavBar'
import { AuthContext } from '../context/auth/AuthContext'
import ProtectedRoute from './ProtectedRoute'
import PublicRouter from './PublicRouter'
import { 
  Home,
  Login,
  Profile,
  Register,
  ResetPassword,
  UpdatePassword,
 } from '../screens'

const AppRouter = () => {

  const {authState:{isAuthenticated}, getUserAuth} = useContext(AuthContext )

  useEffect(() => {
    getUserAuth()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      <Router>
        <Nav />
        <Switch>
          <Route exact path="/" component={Home} />

          <ProtectedRoute exact isAuth={isAuthenticated}path="/profile/"component={Profile} />

          <PublicRouter exact isAuth={isAuthenticated} path="/login" component={Login} />
          <PublicRouter exact isAuth={isAuthenticated} path="/register" component={Register} />
          <PublicRouter exact isAuth={isAuthenticated} path="/reset" component={ResetPassword} />
          <PublicRouter exact isAuth={isAuthenticated} path="/update-password" component={UpdatePassword} />
        
        </Switch>
      </Router>
    </>
  )
}

export default AppRouter
