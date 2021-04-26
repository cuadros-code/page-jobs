import { createContext } from "react";

export interface UserData {
  name : string,
  email: string,
  password : string,
  image : string,
}

export interface AuthState {
  isLoading: boolean,
  isAuthenticated: boolean,
  token: string,
  user: UserData | null
}

interface AuthContextProps {
  authState: AuthState,
  login: () => void
}

export const AuthContext = createContext({} as AuthContextProps )

