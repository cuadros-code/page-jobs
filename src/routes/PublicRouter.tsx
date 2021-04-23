import { FunctionComponent } from "react"
import { Redirect, Route } from "react-router"

interface Props {
  isAuth: boolean,
  exact: boolean,
  path: string,
  component: FunctionComponent<any>
}

const PublicRouter = ({isAuth, component: Component, ...rest} : Props ) => {
  return (
    <Route
    {...rest}
    component={(props: Props) => (
      (!isAuth)
      ? <Component {...props}/>
      : <Redirect to="/"/>
    )}
    
    />
  )
}

export default PublicRouter
