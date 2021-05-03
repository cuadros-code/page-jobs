import styled from 'styled-components'
import googleImg from '../../images/google.svg'
import { colors } from '../../theme'

interface Props {
  title: string,
  onSubmit?: () => void,
  onClick?: () => void
}


const GoogleButton = (props: Props) => {
  return (
    <ButtonGoogle 
      type="button"
      {...props}
    >
      <ImgGoogle src={googleImg} />
      <span>  
        {props.title}
      </span> 
  </ButtonGoogle>
  )
}

export default GoogleButton

const ImgGoogle = styled.img`
  width: 25px;
  position: relative;
  top: 3px;
  left: -10px;
`

const ButtonGoogle = styled.button`
  width: 80%;
  position: relative;
  margin-top: 1.2rem;
  height: 35px;
  border-radius: 10px;
  background-color: ${colors.primaryHover};
  color: #fff;
  border: none;
  cursor: pointer;
  :hover{
  background-color: ${colors.primary};
  }
  span{
    position: relative;
    top: -4px;
  }
`