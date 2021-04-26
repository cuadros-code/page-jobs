import { FunctionComponent } from "react"
import { Redirect, Route } from "react-router"

interface Props {
  isAuth: boolean,
  exact: boolean,
  path: string,
  component: FunctionComponent<any>
}

const ProtectedRoute = ({ isAuth, component: Component , ...rest }: Props) => {
  return (
    <Route
    {...rest}
    component={
      (props : Props) => (
        (isAuth)
        ? <Component {...props} />
        : <Redirect to="/login" />
      )
    }
    />
  )
}

export default ProtectedRoute
