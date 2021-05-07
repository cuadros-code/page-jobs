import { createContext } from "react";

export interface ErrorMsg {
  ok?  : boolean,
  msg? : string | null
}

export interface UserData {
  name        : string,
  email       : string,
  image?      : string,
  uid?        : string | null,
  password?   : string | null,
  photoUrl?   : string | null,
  displayName?: string | null,
}

export interface AuthState {
  token           : string,
  error           : ErrorMsg ,
  isLoading       : boolean,
  user            : UserData | null,
  isAuthenticated : boolean,
}

interface AuthContextProps {
  authState: AuthState,
  logout          : () => void
  getUserAuth     : () => void
  loginWithGoogle : () => void
  resetPassword   : ( email : string ) => void
  register        : ( dataUser : UserData ) => void
  login           : ( email:string, password: string ) => void
}

export const AuthContext = createContext({} as AuthContextProps )

