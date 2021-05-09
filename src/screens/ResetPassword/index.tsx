import styled from 'styled-components'
import { TextField } from '@material-ui/core'
import GeneralButton from '../../components/Buttons/GeneralButton'
import useForm from '../../hooks/useForm'
import { useContext } from 'react'
import { AuthContext } from '../../context/auth/AuthContext'
import { useHistory } from 'react-router'

const ResetPassword = () => {
  const history = useHistory()
  const { resetPassword } = useContext(AuthContext)
  
  const { 
    formValue:{email},
    onChange, 
    reset } = useForm({ email: '' })

  const handleSubmit = (event : React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if(email.length <= 0){
      return
    }
    resetPassword(email)
    reset()
    history.push('/login')
  }
  

  return (
    <Container>
      <Form
        onSubmit={ (e) => handleSubmit(e) }
      >
      <h2>Restablecer la contraseña</h2>
      <div>
          <InputContent>
            <Input
              // error={!!errors?.email}
              id="outlined-basic" 
              label="Correo electronico" 
              variant="outlined"
              value={email}
              onChange={(e) => onChange(e.target.value , 'email')}
              />
          </InputContent>
          <InputContent>
            <GeneralButton type="submit" title="Enviar Link" width="130%" />
          </InputContent>
      </div>
      </Form>
    </Container>
  )
}

export default ResetPassword

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding-top: 2rem;
  height: 50vh;
`
const Form = styled.form`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  border-radius: 15px;
  max-width: 400px;
  width: 90%;
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
  width: 130%;
`

// const Container = styled.div``