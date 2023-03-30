import { StyledArrowButton, StyledStartButton } from "./styles"

const Button = ({texto}) => {
    return (<div>
         <StyledStartButton>{texto}
            <StyledArrowButton src='./public/images/arrow-right.svg'/>
            </StyledStartButton>    
    </div>)
}



export default Button