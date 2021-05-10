import { useReducer } from "react"
import { firestore } from "../../config/configFirebase"
import { PostState, PostContext, PostData } from "./PostContext"
import PostReducer from "./PostReducer"
import references from '../../constant/pathsFirestore'
import Swal from 'sweetalert2'

export const PostInitialState : PostState = {
  activePost  : null,
  lastPost    : null,
  postByUser  : null
}
const PostStateProvider = (props:{ children: JSX.Element}) => {

  const [postState, dispatch] = useReducer( PostReducer , PostInitialState)

  const addJob = async (jobData: PostData, userId: string) => {
    try {
      const timePost =  Date.now()
      await firestore
            .collection(references.refJob)
            .add({...jobData, userId, timePost})
                        
      Swal.fire({
          icon : 'success',
          title: 'El empleo fue publicado',
        })
    } catch (error) {
      Swal.fire({
        icon : 'error',
        title: 'Oops...',
        text : 'Error al publicar empleo',
      })
    }
  }

  const getPostByUser = async ( userId: string ) => {
      try {
        const jobsRef = await firestore.collection(references.refJob)
                                 .where('userId', '==', userId)
                                 .get()
        let jobs : PostData[] = [] 
        jobsRef.docs.forEach( doc => {
          jobs.push({
            id: doc.id,
            ...doc.data()
          })
        })

        dispatch({
          type    : 'jobsByUser',
          payload : jobs
        })

      } catch (error) {
        Swal.fire({
          icon : 'error',
          title: 'Oops...',
          text : 'Error al obtener tus publicaciones',
        })
      }
  }
  

  return (
    <PostContext.Provider
      value={{
        postState,
        addJob,
        getPostByUser
      }}
    >
      {props.children}
    </PostContext.Provider>
  )
}

export default PostStateProvider
