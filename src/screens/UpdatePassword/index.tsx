import styled from 'styled-components'
import { TextField } from '@material-ui/core'
import GeneralButton from '../../components/Buttons/GeneralButton'
import useForm from '../../hooks/useForm'
import { useState } from 'react'
import VisibilityIcon from '@material-ui/icons/Visibility';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';

const UpdatePassword = () => {

  const [error, setError] = useState <{msg: string | null}>({msg: null})
  const [isShowPassword, setIsShowPassword] = useState(false)
  const { formValue:{email}, onChange} = useForm({ email: '' })

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if(email.length < 8){
      return setError({msg: 'La contraseña es debe contener minimo 8 caracteres'})
    }
    setError({msg: null})
  }
  
  return (
    <Container>
      <Form
        onSubmit={handleSubmit}
      >
      <h2>Actualizar contraseña</h2>
          {
            error.msg
            &&
            <AlertError>{error.msg}</AlertError>
          }
      <div>
          <InputContent>
            <Input
              // error={!!errors?.email}
              id="outlined-basic"
              type={ isShowPassword ? 'text': 'password' }
              label="Nueva contraseña"
              name="newPassword"
              variant="outlined"
              value={email}
              onChange={(e) => onChange(e.target.value , 'email')}
              />
              
              <ShowPass
                onClick={() => setIsShowPassword(!isShowPassword)}
              >
                {
                  !isShowPassword ? <VisibilityOffIcon /> : <VisibilityIcon  />
                }
              </ShowPass>
          </InputContent>
          <InputContent>
              
            <GeneralButton type="submit" title="Actualizar contraseña" width="130%" />
          </InputContent>
      </div>
      </Form>
    </Container>
  )
}

export default UpdatePassword

const ShowPass = styled.div`
  position: relative;
  top: -40px;
  cursor: pointer;
  margin: 0;
  left: 120px;
`
const AlertError = styled.p`
  background-color: #FEB2B2;
  padding: 10px;
  position: relative;
  margin: 0 0 10px 0;
  color: #b83434;
  border-radius: 10px;
`

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 60vh;
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
  max-width: 400px;
`

// const Container = styled.div``