import { createContext } from "react";

export interface ErrorMsg {
  ok?  : boolean,
  msg? : string | null
}

export interface PostData {
  link?          : string,
  salary?        : string,
  jobTitle?      : string,
  location?      : string,
  remotoJob?     : string,
  description?   : string
  companyName?   : string,
  vacancyNumbers?: string,
}


export interface PostState {
  lastPost  : PostData[] | null,
  activePost: PostData | null,
  postByUser: PostData[] | PostData | null
}

interface PostContextProps {
  postState : PostState,
  addJob    : (jobData: PostData, userId: string) => void
}

export const PostContext = createContext({} as PostContextProps )

