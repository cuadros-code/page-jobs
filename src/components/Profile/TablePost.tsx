import { Table, TableBody, TableCell,TableContainer,TableHead , TableRow,Paper  } from '@material-ui/core'
import { useContext } from 'react'
import { useHistory } from 'react-router'
import pathsNavigation from '../../constant/pathsNavigation'
import { AuthContext } from '../../context/auth/AuthContext'
import { PostContext, PostData } from '../../context/post/PostContext'
import formatDate from '../../helpers/formatDate'
import { colors } from '../../theme'
import GeneralButton from '../Buttons/GeneralButton'

interface Props {
  postByUser: PostData[]
}

const TablePost = ( { postByUser }: Props ) => {

  const history = useHistory()
  const { deletePost, editPost } = useContext(PostContext)
  const { authState:{user} } = useContext(AuthContext)

  const handleDeletePost = ( postId : string ) => {
    if(user?.uid) deletePost( postId, user?.uid )
  }
  

  return (
    <>
       <TableContainer style={{maxWidth: '850px'}} component={Paper}>
            <Table aria-label="simple table">
              <TableHead style={{ background: colors.primaryLight }} >
                <TableRow>
                  <TableCell align="center">Titulo del empleo</TableCell>
                  <TableCell align="center">Fecha de publicación</TableCell>
                  <TableCell align="center">Acciones</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {postByUser!.map((row) => (
                  <TableRow key={row.id}>
                    <TableCell align="center" component="th" scope="row">
                      {row.jobTitle}
                    </TableCell>
                    <TableCell align="center">{row.timePost && formatDate(row.timePost)}</TableCell>
                    <TableCell align="center">
                      <GeneralButton 
                        title="Eliminar" 
                        margin="5px 10px" 
                        width="100px"
                        onClick={ () => { row.id && handleDeletePost(row.id) }}
                      />
                      <GeneralButton 
                        onClick={() => {
                          editPost(row.id!)
                          history.push(pathsNavigation.POST_JOB)
                        }}
                        title="Editar" 
                        width="100px" />
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
    </>
  )
}

export default TablePost
