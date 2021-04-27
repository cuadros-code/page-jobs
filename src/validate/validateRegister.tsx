
export interface FormRegister {
  name?: string,
  email?: string,
  password?: string,
}

export const validateRegister = (campos: FormRegister) => {
  const error : FormRegister = {}

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
  if(!campos.name){
    error.name = 'El nombre es requerido'
  }


  return error
}