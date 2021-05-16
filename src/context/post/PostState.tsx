import { useReducer } from "react"
import { firestore } from "../../config/configFirebase"
import { PostState, PostContext, PostData } from "./PostContext"
import PostReducer from "./PostReducer"
import references from '../../constant/pathsFirestore'
import Swal from 'sweetalert2'

export const PostInitialState : PostState = {
  activePost  : null,
  lastPost    : null,
  postById : null,
  postByUser  : null
}
const PostStateProvider = (props:{ children: JSX.Element}) => {

  const [postState, dispatch] = useReducer( PostReducer , PostInitialState)

  const getLastPost = async () => {
    try {
      const jobsRef = await firestore
            .collection(references.refJob)
            .orderBy('timePost', 'desc')
            .limit(3)
            .get()

      let jobs : PostData[] = [] 
      
      jobsRef.docs.forEach( doc => {
        jobs.push({
          id: doc.id,
          ...doc.data()
        })
      })
      
      dispatch({
        type:'lastPost',
        payload : jobs
      })

    } catch (error) {
      
    }
  }
  
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

      getPostByUser(userId)
      
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
        const jobsRef = await firestore
                              .collection(references.refJob)
                              .where('userId', '==', userId)
                              .get()

        let jobs : PostData[] | null = []

        if(jobsRef.docs.length >= 1 ){
          jobsRef.docs.forEach( doc => {
            jobs!.push({
              id: doc.id,
              ...doc.data()
            })
          })
        }else{
          jobs = null
        }

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

  const getPostById = async (postId: string) => {
    try {
      const jobsRef = await firestore
                    .collection(references.refJob)
                    .doc(postId)
                    .get()

      let job = {};
      job = ( { id: jobsRef.id, ...jobsRef.data()} )

      dispatch({
        type: 'postById',
        payload : job
      })
      
    } catch (error) {
      Swal.fire({
        icon : 'error',
        title: 'Oops...',
        text : 'El empleo ya fue eliminado',
      })
    }
  }
  
  const deletePost = ( postId : string, userId: string ) => {
    try {
      
      Swal.fire({
        title: 'Desea eliminar la publicación ?',
        showDenyButton: true,
        showCancelButton: true,
        cancelButtonText: 'Cancelar',
        confirmButtonText: `Eliminar`,
        denyButtonText: `Cancelar`,
      }).then( async (result) => {
        if (result.isConfirmed) {
          
          Swal.fire('Eliminado', '', 'success')
          await firestore
            .collection(references.refJob)
            .doc(postId)
            .delete()

          getPostByUser(userId)
        } else if (result.isDenied) {
          Swal.fire('Acción cancelada', '', 'info')
        }
      })      

    } catch (error) {
      Swal.fire({
        icon : 'error',
        title: 'Oops...',
        text : 'No se pudo eliminar la publicación',
      })
    }
  }
  

  return (
    <PostContext.Provider
      value={{
        postState,
        addJob,
        deletePost,
        getPostById,
        getLastPost,
        getPostByUser,
      }}
    >
      {props.children}
    </PostContext.Provider>
  )
}

export default PostStateProvider
