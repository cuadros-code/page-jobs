import { useContext, useEffect } from 'react'
import { useHistory } from 'react-router'
import styled from 'styled-components'
import GeneralButton from '../../components/Buttons/GeneralButton'
import TablePost from '../../components/Profile/TablePost'
import { AuthContext } from '../../context/auth/AuthContext'
import { PostContext } from '../../context/post/PostContext'

const Index = () => {

  const history = useHistory()
  const { authState:{user} } = useContext(AuthContext)
  const { postState:{postByUser}, getPostByUser } = useContext(PostContext)

  useEffect(() => {
    if(user){
      getPostByUser(user.uid!)
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <Container>
        <ContentButton>
          <GeneralButton title="Editar perfil" />
          <GeneralButton title="Publicar empleo" onClick={() => {history.push('/profile/post-job')}} />
        </ContentButton>
        <TableContent>
          {
            postByUser && <TablePost postByUser={postByUser} />
          }
        </TableContent>
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
const TableContent = styled.div`
  margin-top: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
`