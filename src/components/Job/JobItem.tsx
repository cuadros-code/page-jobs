import { Typography } from '@material-ui/core'
import styled from 'styled-components'
import LocationOnIcon from '@material-ui/icons/LocationOn';
import { colors } from '../../theme';
import { PostData } from '../../context/post/PostContext';
import { useHistory } from 'react-router';

interface Props {
  job: PostData
}

const JobItem = ( { job } : Props) => {

  const history = useHistory()
  
  const onClickJob = () => {
    history.push(`/job/${job.id}`)
  }
  

  return (
    <>
      <Container onClick={onClickJob} >
        <Label variant="h6" color="primary">{job.jobTitle}</Label>
        <Label variant="subtitle1" color="primary">{job.companyName}</Label>
        <Location>
          <LocationIcon style={{ fontSize: 20 }} />
          <Label variant="subtitle2" color="primary"> {job.location}</Label>
        </Location>
        {job.description 
        &&
          <Description 
          variant="subtitle2" 
          dangerouslySetInnerHTML={
            {__html: job.description?.toString().slice(0, 600).concat('...')}} 
          > 
          </Description>
        }

      </Container>
    </>
  )
}

export default JobItem

const Container = styled.div`

  width: 100%;
  cursor: pointer;
  border-bottom: 1px solid #e1e1e1;
  padding: 1.5rem 1rem 1.5rem 1rem;
  :hover{
    background-color: #f1f3f8;
    border-bottom: 2px solid ${colors.primary};
  }
`
const LocationIcon = styled(LocationOnIcon)`
  color: #FCB440;
  font-size: 50;
`
const Location = styled.div`
  display: flex;
  /* align-items: center; */
`
const Label = styled(Typography)`
 padding-bottom: 10px ;
`
const Description = styled(Typography)`
  padding-bottom: 10px ;
  display : -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  `
  /*border-bottom: 1px solid #e1e1e1;
  word-break: break-word;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  line-height: 16px; 
  max-height: 32px; 
  -webkit-line-clamp: 6; 
  -webkit-box-orient: vertical;
  :hover{
    background-color: #f1f3f8;
  }*/