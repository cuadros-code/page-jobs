import { PostData, PostState } from "./PostContext"

type PostAction = 
  | { type: 'addJob', payload: PostData }
  | { type: 'jobsByUser', payload: PostData[] | null }
  | { type: 'lastPost', payload: PostData[] }
  | { type: 'postById', payload: PostData }

const PostReducer = (state: PostState, action: PostAction) : PostState => {

  switch (action.type) {
    case 'addJob':
      return{
        ...state
      }
    case 'jobsByUser':
      return{
        ...state,
        postByUser: action.payload
      }
    case 'lastPost':
      return {
        ...state,
        lastPost: action.payload
      }
    case 'postById':
      return {
        ...state,
        postById: action.payload
      }
  
    default:
      return state
  }
} 

export default PostReducer