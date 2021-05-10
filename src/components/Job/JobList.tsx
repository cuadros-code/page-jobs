import { useContext, useEffect } from "react"
import { PostContext } from "../../context/post/PostContext"
import JobItem from "./JobItem"


const JobList = () => {

  const { postState:{lastPost}, getLastPost } =  useContext(PostContext)
  
  useEffect(() => {
    getLastPost()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
    {
     lastPost && lastPost.map((job) => (
        <JobItem 
          job={job}
          key={job.id} 
        />
      ) )
    }
    </>
  )
}

export default JobList
