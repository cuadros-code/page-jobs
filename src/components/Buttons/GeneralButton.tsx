import styled from "styled-components"
import { colors } from "../../theme"

interface Props {
  title: string,
  width?: string,
  margin?: string,
  type?: 'submit' | 'reset' | 'button',
  onSubmit?: () => {},
  onClick?: () => {}
}

interface PropsStyle{
  width: string,
  margin?: string,
}

const GeneralButton = ( props : Props ) => {
  return (
    <Button
      width={`${props.width}`}
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