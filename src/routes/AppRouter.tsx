import { useContext, useEffect } from 'react'
import  Nav  from '../components/NavBar'
import { AuthContext } from '../context/auth/AuthContext'
import ProtectedRoute from './ProtectedRoute'
import PublicRouter from './PublicRouter'
import CircularProgress from '@material-ui/core/CircularProgress';
import { 
  BrowserRouter as Router,
  Switch,
  Route,
  } from 'react-router-dom'
import { 
  Home,
  Login,
  PostJob,
  Profile,
  Register,
  ResetPassword,
  UpdatePassword,
 } from '../screens'
import navigation from '../constant/pathsNavigation'

const AppRouter = () => {
  
  const {authState:{isAuthenticated, isLoading}, getUserAuth} = useContext(AuthContext )

  useEffect(() => {
    getUserAuth()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  if (isLoading) {
    return (
      <>
        <CircularProgress color="primary" />
      </>
    )
  }

  return (
    <>
      <Router>
        <Nav />
        <Switch>
          <Route exact path={navigation.HOME} component={Home} />

          <ProtectedRoute 
            exact 
            isAuth={isAuthenticated} 
            path={navigation.PROFILE} 
            component={Profile} 
          />
          <ProtectedRoute 
            exact 
            isAuth={isAuthenticated} 
            path={navigation.POST_JOB} 
            component={PostJob} 
          />

          <PublicRouter 
            exact 
            isAuth={isAuthenticated} 
            path={navigation.LOGIN} 
            component={Login} 
          />
          <PublicRouter 
            exact 
            isAuth={isAuthenticated} 
            path={navigation.REGISTER} 
            component={Register} 
          />
          <PublicRouter 
            exact 
            isAuth={isAuthenticated} 
            path={navigation.RESET_PASSWORD} 
            component={ResetPassword} 
          />
          <PublicRouter 
            exact 
            isAuth={isAuthenticated} 
            path="/update-password" 
            component={UpdatePassword} 
          />
        
        </Switch>
      </Router>
    </>
  )
}

export default AppRouter
