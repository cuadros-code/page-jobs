import { useReducer } from "react"
import { AuthContext, AuthState, UserData } from './AuthContext'
import AuthReducer from "./AuthReducer"
import { auth, GoogleProvider } from "../../config/configFirebase"
import { serializeUser } from "../../helpers/serializeUser"

export const AuthInitialState : AuthState = {
  isAuthenticated: false,
  isLoading: false,
  token: '',
  user: null,
  error: {ok: true},
}
const AuthStateProvider = (props:{ children: JSX.Element}) => {


  const [authState, dispatch] = useReducer( AuthReducer , AuthInitialState)

  const getUserAuth = () => {
    try {
      
      auth.onAuthStateChanged(( user ) => {
        if ( user ){
          const dataUser = serializeUser(user)

          dispatch({
            type: 'login',
            payload: dataUser
          })
        }
      })
    } catch (error) {
      dispatch({
        type: 'error',
        payload: {ok: false, msg:'Error al iniciar sesión'}
      })
    }
  }
  

  const login = async (email: string, password: string ) => {
    try {
      const userLogin = await auth.signInWithEmailAndPassword(email, password)
      const { user } = userLogin

      if(user){
        const dataUser = serializeUser(user)
        dispatch({
          type: 'login',
          payload: dataUser
        })
      }
    } catch (error) {
      dispatch({
        type: 'error',
        payload: {ok: false, msg:'Error al iniciar sesión'}
      })
    }
  }
  
  const register = async ({name, email, password}: UserData) => {
    try {
    
      const registerUser = await auth.createUserWithEmailAndPassword(email, password!)
      await registerUser.user?.updateProfile({displayName: name})
      const { user } = registerUser

      const dataUser: UserData = {
        uid         : user?.uid,
        email       : user?.email || '',
        photoUrl    : user?.photoURL,
        name        : user?.displayName || '',
        displayName : user?.displayName,
      }
      dispatch({
        type: 'register',
        payload: dataUser
      })
    
    } catch (error) {
      dispatch({
        type: 'error',
        payload: {ok: false, msg:'Error al registrarse'}
      })
    }
  }

  const loginWithGoogle = async () => {
    try {
      
      const userGoogle = await auth.signInWithPopup(GoogleProvider)

      const { user } = userGoogle
      const dataUser: UserData = {
        uid         : user?.uid,
        email       : user?.email || '',
        photoUrl    : user?.photoURL,
        name        : user?.displayName || '',
        displayName : user?.displayName,
      }
      dispatch({
        type: 'login',
        payload: dataUser
      })
  
    } catch (error) {
      dispatch({
        type: 'error',
        payload: {ok: false, msg:'Error al iniciar sesión con Google'}
      })
    }
  }

  const logout = async () => {
    try {

      await auth.signOut()
      dispatch({
        type: 'logout'
      })

    } catch (error) {
      dispatch({
        type: 'error',
        payload: {ok: false, msg: 'Error al cerrar sesión'}
      })
    }
  }

  const resetPassword = async (email: string) => {
    try {
     const a = await auth.sendPasswordResetEmail(email)
     console.log(a);
    } catch (error) {
      
    }
  }
  

  return (
    <AuthContext.Provider
      value={{
        authState,
        login,
        logout,
        register,
        getUserAuth,
        resetPassword,
        loginWithGoogle,
      }}
    >
      {props.children}
    </AuthContext.Provider>
    
  )
}

export default AuthStateProvider
