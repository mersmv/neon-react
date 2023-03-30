import Button from "../Button/Button"
import Check from "../Check/Check"
import { StyledCardContainer, StyledSemiTitle, StyledSpan, StyledText, StyledTitle } from "./styles"

const SelectedPlan = ({plantitle, money, plantext}) =>{
    return (
        <StyledCardContainer>
            <StyledTitle>{plantitle}</StyledTitle>
            <StyledSemiTitle>$<StyledSpan>{money}</StyledSpan>/mo</StyledSemiTitle>
            <StyledText>{plantext}</StyledText>
            <Button texto='Start Free Trial' href=""></Button>
            <Check tex={'Unlimited placeholder texts'}/>
            <Check tex={'Consectetur adipiscing elit'}/>
            <Check tex={'Excepteur sint occaecat cupidatat'}/>
            <Check tex={'Officia deserunt mollit anim'}/>
        </StyledCardContainer>
    )
}

export default SelectedPlan