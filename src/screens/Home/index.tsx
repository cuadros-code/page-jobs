import { Typography } from '@material-ui/core'
import  styled from 'styled-components'
import GeneralButton from '../../components/Buttons/GeneralButton'
import JobList from '../../components/Job/JobList'
import { colors } from '../../theme'

const Index = () => {
  return (
    <ContainerHome>
      <Container>
        <Form>
          <ContainerForm>
            <ContainerInput>
            <Label1 htmlFor="profesión">Titulo del empleo</Label1>
            <TextField
              id="profesión"
              placeholder="profesión o palabra clave "
            />
            </ContainerInput>
            <ContainerInput>
            <Label2 htmlFor="ubicación">Ubicación</Label2>
              <TextField
                id="ubicación"
                placeholder="ubicación de empleo"
              />
            <GeneralButton title="Buscar" width="120px" margin="3px 0 0 10px"/>
            </ContainerInput>
          </ContainerForm>
        </Form>

      </Container>
      <JobListContainer>
        <Label variant="body1" >Publicados Recientemente</Label>
        <JobList />
      </JobListContainer>
    </ContainerHome>
  )
}

export default Index

const ContainerHome = styled.div`
height: 100vh;
padding: 4rem 1rem;
`
const Container = styled.div`
  width: 100%;
`
const ContainerForm = styled.div`
  display: flex;
  flex-direction: row;
  border-radius: 15px;
  border: 2px solid ${colors.primaryLight};
  padding: 10px;
  width: 80%;
`
const ContainerInput = styled.div`
  display: flex;
  align-items: flex-start;
  position: relative;
  width: 100%;
`
const Form = styled.form`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`
const TextField = styled.input`
  border: none;
  width: 80%;
  border-radius: 10px;
  height: 40px;
  left: -10px;
  :focus{
    outline: none;
    border: 1px solid #e1e1e1 
  }
`
const Label1 = styled.label` 
  position: absolute;
  top:-40px;
  width: auto;
  cursor: pointer;
  /* left: 20px; */
`
const Label2 = styled.label`
  position: absolute;
  top:-40px;
  width: auto;
  left: 0px;
  cursor: pointer;
`
const JobListContainer = styled.div`
  padding-top: 3rem;
  margin: auto;
  width: 80%;
`
const Label = styled(Typography)`

  padding-bottom: 1rem;

  :after{
    content: '';
    height: 3px;
    display: block;
    width: 190px;
    border-right: 1px white;
    background-color: ${colors.primary};
  }

`