import { createContext } from "react";

export interface ErrorMsg {
  ok?  : boolean,
  msg? : string | null
}

export interface PostData {
  id?            : string;
  link?          : string,
  salary?        : string,
  jobTitle?      : string,
  location?      : string,
  timePost?      : string,
  remotoJob?     : string,
  description?   : string
  companyName?   : string,
  vacancyNumbers?: string,
}


export interface PostState {
  lastPost  : PostData[] | null,
  activePost: PostData | null,
  postByUser: PostData[] | null
}

interface PostContextProps {
  postState     : PostState,
  getLastPost   : () => void
  getPostByUser : (userId: string) => void
  addJob        : (jobData: PostData, userId: string) => void,
  deletePost    : (postId : string, userId: string) => void
}

export const PostContext = createContext({} as PostContextProps )

