import { useState } from 'react';
import styled from 'styled-components'
import {Link} from 'react-router-dom'
import { colors } from '../../theme';
import MenuIcon from '@material-ui/icons/Menu';
import ClearIcon from '@material-ui/icons/Clear';


const Index = () => {

  const [isMobile, setIsMobile] = useState(false)


  const MobileComponent: React.FC = (props) => {
    return(
      <>
      {
        isMobile
        ? <NavLinkMobile onClick={() => setIsMobile(false)} >{props.children}</NavLinkMobile>
        : <NavLink>{props.children}</NavLink>
      }
      </>
    )
  }

  return (
    <NavBar>
      <Logo>Logo</Logo>
      <MobileComponent>
        <LinkItem to="">
          <li>Home</li>
        </LinkItem>
        <LinkItem to="">
          <li>About</li>
        </LinkItem>
        <LinkItem to="">
          <li>Contact</li>
        </LinkItem>
        <LinkItem to="">
          <li>Blog</li>
        </LinkItem>
        <SignUpLink to="">
          <li>Iniciar Sesion</li>
        </SignUpLink>
      </MobileComponent>
      <BottomMobile onClick={() => setIsMobile(!isMobile)  } >
      {
        isMobile
        ? <ClearIcon />
        : <MenuIcon />
      }
      </BottomMobile>
    </NavBar>
  )
}

export default Index



const Logo = styled.h4`
  font-size: 25px;
`
const NavBar = styled.nav`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 60px;
  color: white;
  background-color: ${colors.primary};
`

const NavLink = styled.ul`
  display: flex;
  justify-content: flex-end;
  list-style: none;
  width: 75%;
  @media screen and (max-width : 780px){
    display: none;
    
  }
`
const NavLinkMobile = styled.ul`
  padding-left: 0;
  @media screen and (max-width : 780px){
    position: absolute;
    display: block;
    list-style: none;
    background-color: ${colors.primary};
    left: 0;
    top: 40px;
    transition: all 0.5s ease-in-out;
    width: 100%;
  }
`
const LinkItem = styled(Link)`
  text-decoration: none;
  color: white;
  font-size: 1.1rem;
  padding: 10px 20px;
  cursor: pointer;
  @media screen and (max-width : 780px){
    color: white;
    text-align: center;
    padding: 30px;
    width: 100%;
    transition: all 0.5s ease-in-out;
    
  }
  :hover{
    color: ${colors.primaryLight}
  }
`
const SignUpLink = styled(Link)`
  text-decoration: none;
  color: white;
  font-size: 1.0rem;
  padding: 10px 10px;
  cursor: pointer;
  border: 1px solid blanchedalmond;
  border-radius: 5px;
  @media screen and (min-width : 780px){
    :hover{
      background: ${colors.primaryHover};
    }
  }
  @media screen and (max-width : 780px){
    color: white;
    text-align: center;
    padding: 30px;
    width: 100%;
    transition: all 0.5s ease-in-out;
    border: none;
  }
`
const BottomMobile = styled.div`
  display: none;
  @media screen and (max-width : 780px){
    display: block;
    font-size: 1.2rem;
    position: absolute;
    cursor: pointer;
    right: 25px;
    top: 15px;
  }
  
`