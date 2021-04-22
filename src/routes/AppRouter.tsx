import { 
  BrowserRouter as Router,
  Switch,
  Route
  } from 'react-router-dom'
import  Nav  from '../components/NavBar'

const AppRouter = () => {
  return (
    <>
      <Router>
        <Nav />
        <Switch>

        </Switch>
      </Router>
    </>
  )
}

export default AppRouter
