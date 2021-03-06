import { TextField } from '@material-ui/core'
import { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import GeneralButton from '../../components/Buttons/GeneralButton'
import GoogleButton from '../../components/Buttons/GoogleButton'
import { AuthContext } from '../../context/auth/AuthContext'
import useForm from '../../hooks/useForm'
import { colors } from '../../theme'
import { FormRegister, validateRegister } from '../../validate/validateRegister'

const Index = () => {

  const [errors, setErrors] = useState<FormRegister | null>()
  const { register, loginWithGoogle } = useContext(AuthContext)

  const {
    onChange, 
    formValue,
  } = useForm({name: '', email: '', password: ''})

  const {name, email, password} = formValue

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const err = validateRegister({name, email, password})
    if (Object.keys(err).length > 0) {
     return setErrors({...err})
    }
    setErrors(null)
    register(formValue)
  }
  

  return (
    <Container>
      
      <ContainerCard>
        <Form 
        onSubmit={handleSubmit}
        >
        <h2>Registrarse</h2>
          <InputContent>
            <Input
              error={!!errors?.name}
              id="outlined-basic" 
              label="Nombre completo" 
              variant="outlined"
              value={name}
              onChange={(e) => onChange(e.target.value , 'name')}
              />
              {
                errors?.name
                &&
                <AlertError>{errors.name}</AlertError>
              }
          </InputContent>
          <InputContent>
            <Input
              error={!!errors?.email}
              id="outlined-basic" 
              label="Correo electronico" 
              variant="outlined"
              value={email}
              onChange={(e) => onChange(e.target.value , 'email')}
              />
              {
                errors?.email
                &&
                <AlertError>{errors.email}</AlertError>
              }
          </InputContent>
          <InputContent>
            <Input 
              error={!!errors?.password}
              id="outlined-basic"
              label="Contrase??a" 
              type="password" 
              variant="outlined" 
              value={password}
              onChange={(e) => onChange( e.target.value, 'password')}
            />
            
          {
            errors?.password
            &&
            <AlertError>{errors.password}</AlertError>
          }
          </InputContent>

          <InputContent>
            <GeneralButton type="submit" width="80%" title="Registrarse"/>
            <GoogleButton title="Registrarse con Google" onClick={() => loginWithGoogle()}/>
            <LinkItem to="/login" >??ya tienes un cuenta? inicia sesi??n</LinkItem>
          </InputContent>
        </Form>
      </ContainerCard>      
    </Container>
  )
}

export default Index

const AlertError = styled.p`
  background-color: #FEB2B2;
  padding: 10px;
  color: #b83434;
  border-radius: 10px;
`
const LinkItem = styled(Link)`
  color: ${colors.primary};
  margin-top: 1rem;
  margin-bottom: 1rem;
  font-weight: bold;
`

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding-top: 1.5rem;
  padding-bottom: 3rem;
  height: auto;
`
const Form = styled.form`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`
const ContainerCard = styled.div`
  height: auto;
  max-width: 500px;
  width: 90%;
  border-radius: 15px;
  box-shadow: 0px 0px 10px rgba(0,0,0,0.2);
`
const InputContent = styled.div`
  margin-bottom: 1rem;
  padding: 0 10px 0 10px;
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`
const Input = styled(TextField)`
  width: 80%;
`