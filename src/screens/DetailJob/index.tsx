import { useContext, useEffect } from "react";
import { useParams } from "react-router"
import styled from 'styled-components'
import PersonIcon from '@material-ui/icons/Person';
import formatSalary from "../../helpers/formatSalary";
import BusinessIcon from '@material-ui/icons/BusinessCenter';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import { PostContext } from "../../context/post/PostContext";
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import SettingsRemoteIcon from '@material-ui/icons/SettingsRemote';

type TParams =  { id: string };

const Index = () => {

  const { id }: TParams = useParams()
  const { postState:{ postById }, getPostById } = useContext(PostContext)

  useEffect(() => {
    if (id){
      getPostById(id)
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <Container>
      <h2>{postById?.jobTitle}</h2>
      <Details>
        <List>
          <div>
            <ListItem>
              <BusinessIcon /> 
              <Span>{ postById?.companyName}</Span> 
            </ListItem>
            <ListItem>
              <MonetizationOnIcon /> 
              <Span>{ postById?.salary && formatSalary(postById?.salary)}</Span> 
            </ListItem>
            <ListItem>
              <PersonIcon /> 
              <Span>{postById?.vacancyNumbers} Vacante</Span>
            </ListItem>
          </div>
          <div>
            <ListItem>
              <LocationOnIcon /> 
              <Span>{postById?.location}</Span>
            </ListItem>
            <ListItem>
              <SettingsRemoteIcon /> 
              <Span> Trabajo remoto ( {postById?.remotoJob} )</Span>
            </ListItem>
          </div>
        </List>
      </Details>
      {
        postById?.description
        &&
        <Description
        dangerouslySetInnerHTML={
          {__html: postById?.description}}> 
        </Description>
      }
    </Container>
  )
}

export default Index

const Container = styled.div`
  padding: 20px 10% 0 10%;
`
const Details = styled.div`
  padding-top: 0.8rem;
`
const List = styled.ul`
  list-style: none;
  padding: 0;
  display: grid;
  grid-template-columns: 400px 400px;
  @media( max-width: 750px){
    grid-template-columns: 400px;
  }
`
const Span = styled.ul`
  list-style: none;
`
const ListItem = styled.li`
  display: flex;
  margin-bottom: 25px;
  align-items: center;
`
const Description = styled.div`
`