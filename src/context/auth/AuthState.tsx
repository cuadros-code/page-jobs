import { useReducer } from "react"
import { clientAxios } from "../../config/configAxios"
import { AuthContext, AuthState, UserData } from './AuthContext'
import AuthReducer from "./AuthReducer"

export const AuthInitialState : AuthState = {
  isAuthenticated: false,
  isLoading: false,
  token: '',
  user: null,
  error: {ok: true},
}

const AuthStateProvider = (props:{ children: JSX.Element}) => {


  const [authState, dispatch] = useReducer( AuthReducer , AuthInitialState)

  const login = async (email: string, password: string ) => {
    try {
      let username = email
      const res = await clientAxios.post(`/auth/login`, { username  , password })
      const { data } = res
      if(!data.ok){
        return dispatch({
          type : 'error',
          payload: data
        })
      }
      dispatch({
        type: 'login',
        payload: res.data.user
      })
    } catch (error) {
      
    }
  }
  

  const register = async (data: UserData) => {
    try {

      const res = await clientAxios.post(`/auth/register`, data)
      
    } catch (error) {
      
    }
  }

  return (
    <AuthContext.Provider
      value={{
        authState,
        login,
        register
      }}
    >
      {props.children}
    </AuthContext.Provider>
    
  )
}

export default AuthStateProvider
