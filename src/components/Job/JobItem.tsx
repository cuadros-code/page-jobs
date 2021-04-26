import { Typography } from '@material-ui/core'
import styled from 'styled-components'
import LocationOnIcon from '@material-ui/icons/LocationOn';
import { colors } from '../../theme';

interface DataJob {
  id: number,
  title: string,
  description: string,
  company: string,
  site: string,
}

interface Props {
  job: DataJob
}

const JobItem = ( { job } : Props) => {
  return (
    <>
      <Container>
        <Label variant="h6" color="primary">{job.title}</Label>
        <Label variant="subtitle1" color="primary">{job.company}</Label>
        <Location>
          <LocationIcon style={{ fontSize: 20 }} />
          <Label variant="subtitle2" color="primary"> {job.site}</Label>
        </Location>
        <Description variant="subtitle2"  > {job.description}...</Description>

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
   word-break: break-word;
   overflow: hidden;
   text-overflow: ellipsis;
   display: -webkit-box;
   line-height: 16px; /* fallback */
   max-height: 32px; /* fallback */
   -webkit-line-clamp: 6; /* number of lines to show */
   -webkit-box-orient: vertical;

`