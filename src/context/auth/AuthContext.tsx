import { createContext } from "react";

export interface ErrorMsg {
  ok?: boolean,
  msg?: string | null
}

export interface UserData {
  name : string,
  email: string,
  password : string,
  image? : string,
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
  login: ( email:string, password: string ) => void,
  register: ( dataUser : UserData ) => void
}

export const AuthContext = createContext({} as AuthContextProps )

