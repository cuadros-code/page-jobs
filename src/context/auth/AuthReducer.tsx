import { AuthState, ErrorMsg, UserData } from './AuthContext'

type AuthAction = 
  | { type: 'error', payload: ErrorMsg }
  | { type: 'login', payload: UserData }
  | { type: 'register', payload: UserData }
  | { type: 'logout'}

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
    case 'register':
      return{
        ...state,
        isLoading: true,
        isAuthenticated: true,
        user: action.payload,
        error: {ok: true}
      }
    case 'logout':
      return{
        ...state,
        isLoading: false,
        isAuthenticated: false,
        user: null,
        error: {ok: true}
      }

    default:
      return state
  }
  
}

export default AuthReducer
