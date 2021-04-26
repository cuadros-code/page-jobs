
export interface FormLogin {
  email?: string,
  password?: string,
}

export const validateLogin = (campos: FormLogin) => {
  const error : FormLogin = {}

  if(!campos.email){
    error.email = 'El correo es requerido'
  }else{
    let validatEmail = /\S+@\S+\.\S+/
    if(!validatEmail.test(campos.email)){
      error.email = 'El correo es invalido'
    }
  }
  if(!campos.password){
    error.password = 'La contraseña  es requerida'
  }else{
    if(campos?.password?.length! < 8){
      error.password = 'La contraseña es debe contener minimo 8 caracteres'
    }
  }

  return error
}