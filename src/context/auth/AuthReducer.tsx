import { AuthState, ErrorMsg, UserData } from './AuthContext'

type AuthAction = 
  | { type: 'error', payload: ErrorMsg }
  | { type: 'login', payload: UserData }

const AuthReducer = (state: AuthState, action: AuthAction): AuthState => {
  
  switch (action.type) {
  
    case 'error':
      return{
        ...state,
        error: action.payload
      }
    case 'login':
      return{
        ...state,
        isLoading: true,
        isAuthenticated: true,
        user: action.payload,
        error: {ok: true}
      }

    default:
      return state
  }
  
}

export default AuthReducer
