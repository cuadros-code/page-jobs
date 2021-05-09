import { useHistory } from 'react-router'
import styled from 'styled-components'
import GeneralButton from '../../components/Buttons/GeneralButton'

const Index = () => {

  const history = useHistory()

  return (
    <Container>
        <ContentButton>
          <GeneralButton title="Editar perfil" />
          <GeneralButton title="Publicar empleo" onClick={() => {history.push('/profile/post-job')}} />
        </ContentButton>
    </Container>
  )
}

export default Index

const Container = styled.div`
  padding: 15px;
`
const ContentButton = styled.div`
  display: flex;
  justify-content: space-between;
`