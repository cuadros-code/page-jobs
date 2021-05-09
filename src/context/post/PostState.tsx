import { useReducer } from "react"
import { firestore } from "../../config/configFirebase"
import { PostState, PostContext, PostData } from "./PostContext"
import PostReducer from "./PostReducer"

export const PostInitialState : PostState = {
  activePost  : null,
  lastPost    : null,
  postByUser  : null
}
const PostStateProvider = (props:{ children: JSX.Element}) => {

  const [postState, dispatch] = useReducer( PostReducer , PostInitialState)

  const addJob = async (jobData: PostData, userId: string) => {
    try {
      const res = await firestore
                        .collection('jobs')
                        .doc(userId)
                        .set(jobData)

      console.log(res);
    } catch (error) {
      console.log(error);
    }
  }
  

  return (
    <PostContext.Provider
      value={{
        postState,
        addJob
      }}
    >
      {props.children}
    </PostContext.Provider>
  )
}

export default PostStateProvider
