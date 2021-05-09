import {FormControl,
        Select,
        TextField,
        InputLabel,
        MenuItem,
        TextareaAutosize } from '@material-ui/core'
import { useContext, useState } from 'react'
import styled from 'styled-components'
import GeneralButton from '../../components/Buttons/GeneralButton'
import { AuthContext } from '../../context/auth/AuthContext'
import { PostContext } from '../../context/post/PostContext'
import useForm from '../../hooks/useForm'
import { FormAddRegister, validateAddJob } from '../../validate/validateAddJob'

const PostJob = () => {

  const [error, setError] = useState<FormAddRegister | null>()
  const { addJob } = useContext(PostContext)
  const { authState: {user} } = useContext(AuthContext)

  const { formValue, onChange } = useForm({
    companyName   : '',
    jobTitle      : '',
    location      : '',
    vacancyNumbers: '',
    salary        : '',
    remotoJob     : '',
    description   : '',
    link          : ''
  })

  const { companyName,
          description, 
          jobTitle, 
          location, 
          remotoJob, 
          salary, 
          vacancyNumbers,
          link  } = formValue

  const handleSubmit = ( e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
   const err = validateAddJob(formValue)
   if (Object.keys(err).length > 0) {
    return setError({...err})
  }
  setError(null)
  if(user?.uid) addJob(formValue, user?.uid)

  }
  

  return (
    <Container>
      <Form
        onSubmit={(e) => handleSubmit(e)}
        noValidate
      >
      
      <h2>Publicar empleo</h2>
        <Input 
          error={!!error?.companyName}
          name='companyName' 
          value={companyName} 
          onChange={(e) => onChange(e.target.value, 'companyName')} 
          label="Nombre de la empresa" 
          required 
        />
        {
          error?.companyName && <AlertError>{error.companyName}</AlertError>
        }
        <Input 
          error={!!error?.link}
          name='link' 
          value={link} 
          onChange={(e) => onChange(e.target.value, 'link')} 
          label="Link de la empresa" 
        />
        {
          error?.link && <AlertError>{error.link}</AlertError>
        }
        <Input 
          error={!!error?.jobTitle}
          name='jobTitle'
          value={jobTitle} 
          onChange={(e) => onChange(e.target.value, 'jobTitle')} 
          label="Titulo del empleo" 
          required 
        />
        {
          error?.jobTitle && <AlertError>{error.jobTitle}</AlertError>
        }
        <Input 
          error={!!error?.location}
          name='location'
          value={location} 
          onChange={(e) => onChange(e.target.value, 'location')} 
          label="Ubicación" 
          required 
        />
        {
          error?.location && <AlertError>{error.location}</AlertError>
        }
        <Input 
          error={!!error?.vacancyNumbers}
          name='vacancyNumbers' 
          value={vacancyNumbers} 
          onChange={(e) => onChange(e.target.value, 'vacancyNumbers')} 
          label="Numero de vacantes" 
          required  
          type="number"
        />
        {
          error?.vacancyNumbers && <AlertError>{error.vacancyNumbers}</AlertError>
        }
        <Input 
          error={!!error?.salary}
          name='salary' 
          value={salary} 
          onChange={(e) => onChange(e.target.value, 'salary')} 
          label="Salario" 
          required  
          type="number"
          />
        {
          error?.salary && <AlertError>{error.salary}</AlertError>
        }
        

        <FormControl>
          <InputLabel required id="demo-simple-select-label">Trabajo Remoto</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            error={!!error?.remotoJob}
            name='remotoJob' 
            value={remotoJob}
            onChange={(e) => onChange( e.target.value as string , 'remotoJob')}
          >
            <MenuItem value="si">Si</MenuItem>
            <MenuItem value="no">No</MenuItem>
            <MenuItem value="temporal">Temporalmente por Covid-19</MenuItem>
          </Select>
        </FormControl>
        {
          error?.remotoJob && <AlertError>{error.remotoJob}</AlertError>
        }

        <TextArea 
          placeholder="Descripción del empleo"
          value={description}
          onChange={(e) => onChange(e.target.value, 'description')}
          rowsMin={6}
        />
        {
          error?.description && <AlertError>{error.description}</AlertError>
        }
        <GeneralButton title="Publicar empleo" />
      </Form>
      
    </Container>
  )
}

export default PostJob

const Container = styled.div`
  width: 100vw;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 0 50px 0;
  @media(max-width: 600px){
    /* padding: 0; */
  }
`

const AlertError = styled.p`
  background-color: #FEB2B2;
  padding: 10px;
  color: #b83434;
  border-radius: 10px;
`
const Form = styled.form`
  width: 80%;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 500px;
`

const Input = styled(TextField)`
  margin-bottom: 15px;
`
const TextArea = styled(TextareaAutosize)`
  margin-top: 2rem;
  margin-bottom: 20px;
  resize: none;
`