import styled from "styled-components"
import { colors } from "../../theme"

interface Props {
  title: string,
  width?: string,
  backgroundColor?: string,
  margin?: string,
  type?: 'submit' | 'reset' | 'button',
  onSubmit?: () => void,
  onClick?: () => void
}

interface PropsStyle{
  width: string,
  margin?: string,
  backgroundColor?: string,
}

const GeneralButton = ( props : Props ) => {
  return (
    <Button
      width={`${props.width}`}
      backgroundColor={`${props.backgroundColor}`}
    {...props}
    >
        {props.title}
    </Button>
  )
}

export default GeneralButton

const Button = styled.button<PropsStyle>`
  background-color: ${colors.primary};
  color: white;
  border-radius: 10px;
  margin: ${props => props.margin};
  width: ${props => props.width};
  border: none;
  height: 35px;
  cursor: pointer;
  :hover{
  background-color: ${colors.primaryHover};
  }
`