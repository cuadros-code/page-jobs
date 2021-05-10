import { Typography } from '@material-ui/core'
import styled from 'styled-components'
import LocationOnIcon from '@material-ui/icons/LocationOn';
import { colors } from '../../theme';
import { PostData } from '../../context/post/PostContext';

interface Props {
  job: PostData
}

const JobItem = ( { job } : Props) => {



  return (
    <>
      <Container>
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
            {__html: job.description?.toString().slice(0, 200).concat('...')}} 
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
   

`