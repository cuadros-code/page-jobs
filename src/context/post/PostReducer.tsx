import { PostData, PostState } from "./PostContext"

type PostAction = 
  | { type: 'addJob', payload: PostData } 

const PostReducer = (state: PostState, action: PostAction) : PostState => {

  switch (action.type) {
    case 'addJob':
      return{
        ...state
      }
  
    default:
      return state
  }
} 

export default PostReducer