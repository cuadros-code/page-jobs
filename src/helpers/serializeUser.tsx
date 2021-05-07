import { UserData } from "../context/auth/AuthContext";
import firebase from 'firebase'

export const serializeUser = (user: firebase.User) => {

  const dataUser: UserData = {
    uid         : user?.uid,
    photoUrl    : user?.photoURL,
    email       : user?.email || '',
    displayName : user?.displayName,
    name        : user?.displayName || '',
  }

  return dataUser

}