import { useReducer } from "react"
import { AuthContext, AuthState } from './AuthContext'
import AuthReducer from "./AuthReducer"

export const AuthInitialState : AuthState = {
  isAuthenticated: false,
  isLoading: false,
  token: '',
  user: null
}

const AuthStateProvider = (props: any) => {


  const [authState, dispatch] = useReducer( AuthReducer , AuthInitialState)

  const login = async () => {

  }

  return (
    <AuthContext.Provider
      value={{
        authState,
        login
      }}
    >
      {props.children}
    </AuthContext.Provider>
    
  )
}

export default AuthStateProvider
