
export interface FormAddRegister {
  link?          : string,
  salary?        : string,
  jobTitle?      : string,
  location?      : string,
  remotoJob?     : string,
  description?   : string
  companyName?   : string,
  vacancyNumbers?: string,
}

export const validateAddJob = ( formData : FormAddRegister ) => {

  const error: FormAddRegister = {}

  if(!formData.companyName){
    error.companyName = 'Ingrese el nombre de la compañia'
  }
  if(!formData.jobTitle){
    error.jobTitle = 'Ingrese el titulo del empleo'
  }
  if(!formData.location){
    error.location = 'Ingrese la ciudad de trabajo'
  }
  if(!formData.vacancyNumbers || Number(formData.vacancyNumbers) <= 0){
    error.vacancyNumbers = 'Ingrese el numero de vacantes valido'
  }
  if(!formData.salary || Number(error.salary) <= 0){
    error.salary = 'Ingrese un salario valido'
  }
  if(!formData.remotoJob){
    error.remotoJob = 'Ingrese el tipo de trabajo'
  }
  if(!formData.description){
    error.description = 'Ingrese la descripción'
  }

  if(formData.link){
    let validate = /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w.-]+)+[\w\-._~:/?#[\]@!$&'()*+,;=.]+$/
    if(!validate.test(formData.link)){
      error.link = 'El correo es invalido'
    }
  }
  
  return error
}