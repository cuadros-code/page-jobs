import { useContext, useEffect, useState } from 'react'
import { RouteComponentProps } from 'react-router-dom'

import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import {PostData} from '../../context/post/PostContext'

import {FormControl,
        Select,
        TextField,
        InputLabel,
        MenuItem, } from '@material-ui/core'
import styled from 'styled-components'
import useForm from '../../hooks/useForm'
import { PostContext } from '../../context/post/PostContext'
import { AuthContext } from '../../context/auth/AuthContext'
import pathsNavigation from '../../constant/pathsNavigation'
import GeneralButton from '../../components/Buttons/GeneralButton'
import { FormAddRegister, validateAddJob } from '../../validate/validateAddJob'

const PostJob = ( { history } : RouteComponentProps ) => {

  const [description, setDescription] = useState('');
  const [error, setError] = useState<FormAddRegister | null>()
  const { postState: { activePost }, addJob, updateJob } = useContext(PostContext)
  const { authState: {user} } = useContext(AuthContext)
  
  
  const { formValue, onChange, setValues, reset } = useForm({
    companyName   : '',
    jobTitle      : '',
    location      : '',
    vacancyNumbers: '',
    salary        : '',
    remotoJob     : '',
    link          : ''
  })

  useEffect(() => {
    if(activePost){
      setValues(activePost)
      setDescription(activePost.description!)
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activePost])

  const { companyName,
          jobTitle, 
          location, 
          remotoJob, 
          salary, 
          vacancyNumbers,
          link  } = formValue

  const handleSubmit = ( ) => {
    // e: React.FormEvent<HTMLFormElement>
    // e.preventDefault()
    const errors = validateAddJob({...formValue, description})
    if (Object.keys(errors).length > 0) return setError({...errors})

    if(user?.uid) addJob({...formValue, description}, user?.uid)
    
    setTimeout(() => {
      history.push(pathsNavigation.PROFILE)
    }, 1000);
    setError(null)
    reset()
  }

  const handleUpdateJob = () => {
    if(user?.uid) updateJob({...formValue, description}, user?.uid)
    history.push(pathsNavigation.PROFILE)
    reset()
  }
  
  
  
  return (
    <Container>
      <Form
        // onSubmit={(e) => handleSubmit(e)}
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

        <InputLabel 
          style={{marginTop: '2rem'}} 
          required id="demo-simple-select-label"
          >Descripción del empleo
        </InputLabel>
        <TextArea 
          theme="snow" 
          value={description}
          onChange={setDescription}
          placeholder="Descripción del empleo"
        />
        {
          error?.description && <AlertError>{error.description}</AlertError>
        }
        {
          activePost
          ?
          <GeneralButton 
            title="Actualizar empleo"
            onClick={handleUpdateJob}  
            />
            :
            <GeneralButton 
            onClick={handleSubmit}  
            title="Publicar empleo" 
          />
        }
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
const TextArea = styled(ReactQuill)`
  margin-top: 5px;
  margin-bottom: 20px;
`