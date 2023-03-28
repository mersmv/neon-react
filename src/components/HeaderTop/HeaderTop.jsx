import { StyledArrowButton, StyledHeaderTop, StyledLogo, StyledSignIn, StyledStartButton, StyledUl } from "./styled"

const HeaderTop = () => {
    return (
        <StyledHeaderTop>
           <StyledLogo src="./public/images/logo.svg" alt="" /> 
           <StyledUl>
            <li>
            <StyledSignIn>Sign in</StyledSignIn>
           </li>
           <li>
            <StyledStartButton>Get Started
            <StyledArrowButton src='./public/images/arrow-right.svg'/>
            </StyledStartButton>
            
           </li>
           </StyledUl>
        </StyledHeaderTop>
    )
}

export default HeaderTop