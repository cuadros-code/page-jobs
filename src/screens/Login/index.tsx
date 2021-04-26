import { TextField } from '@material-ui/core'
import { useState } from 'react'
import styled from 'styled-components'
import GeneralButton from '../../components/Buttons/GeneralButton'
import useForm from '../../hooks/useForm'
import { validateLogin } from '../../validate/validateLogin'
import {FormLogin} from '../../validate/validateLogin'

const Index = () => {

  const [errors, setErrors] = useState<FormLogin>()

  const {
    onChange, 
    formValue:{email, password},
  } = useForm({email: '', password: ''})

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const err = validateLogin({email, password})
    setErrors({...err})
  }
  

  return (
    <Container>
      <ContainerCard>
        <Form 
        onSubmit={handleSubmit}
        >
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
            <GeneralButton width="80%" title="Registrarse"/>
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
  border-radius: 10px;

`

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 80vh;
`
const Form = styled.form`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`
const ContainerCard = styled.div`
  height: 400px;
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