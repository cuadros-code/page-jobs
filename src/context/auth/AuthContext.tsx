import { createContext } from "react";

export interface ErrorMsg {
  ok?: boolean,
  msg?: string | null
}

export interface UserData {
  name : string,
  email: string,
  password?: string | null,
  image? : string,
  displayName?: string | null,
  photoUrl?: string | null,
  uid?: string | null,
}

export interface AuthState {
  isLoading: boolean,
  isAuthenticated: boolean,
  token: string,
  user: UserData | null,
  error: ErrorMsg ,
}

interface AuthContextProps {
  authState: AuthState,
  logout: () => void
  loginWithGoogle: () => void
  resetPassword: ( email : string ) => void
  register: ( dataUser : UserData ) => void
  login: ( email:string, password: string ) => void,
}

export const AuthContext = createContext({} as AuthContextProps )

