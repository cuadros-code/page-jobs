import { TextField } from '@material-ui/core'
import { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import GeneralButton from '../../components/Buttons/GeneralButton'
import GoogleButton from '../../components/Buttons/GoogleButton'
import { AuthContext } from '../../context/auth/AuthContext'
import useForm from '../../hooks/useForm'
import { colors } from '../../theme'
import { validateLogin } from '../../validate/validateLogin'
import {FormLogin} from '../../validate/validateLogin'

const Index = () => {

  const [errors, setErrors] = useState<FormLogin | null>()
  const { authState:{error}, login, loginWithGoogle } = useContext(AuthContext)

  const {
    onChange, 
    formValue:{email, password},
  } = useForm({email: '', password: ''})

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const err = validateLogin({email, password})
    if (Object.keys(err).length > 0) {
      return setErrors({...err})
    }
    setErrors(null)
    login(email, password)
  }
  

  return (
    <Container>
      
      <ContainerCard>
        <Form 
        onSubmit={handleSubmit}
        >
        <h2>Iniciar sesión</h2>
          {
            !error.ok
            &&
            <AlertError>{error.msg}</AlertError>
          }
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
              label="Contraseña" 
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
              <GeneralButton type="submit" width="80%" title="Iniciar sesión"/>
              <GoogleButton title="Iniciar sesión con Google" onClick={() => loginWithGoogle()} />
            <LinkItem to="/register" >¿No eres miembro? crea una cuenta</LinkItem>
          </InputContent>
        </Form>
      </ContainerCard>      
    </Container>
  )
}

export default Index

const LinkItem = styled(Link)`
  color: ${colors.primary};
  margin-top: 1rem;
  margin-bottom: 1rem;
  font-weight: bold;
`

const AlertError = styled.p`
  background-color: #FEB2B2;
  padding: 10px;
  color: #b83434;
  border-radius: 10px;
`


const Container = styled.div`
  display: flex;
  padding-top: 3rem;
  justify-content: center;
  align-items: center;
  width: 100%;
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