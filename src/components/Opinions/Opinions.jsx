import { StyledImg } from "../Objetives/styles"
import { StyledApp, StyledContainer, StyledLinks, StyledNames, StyledText } from "./styles"

const Opinions = ({image, description, name, app}) =>{
    return (
        <StyledContainer>
            <StyledImg src={image} alt="" />
            <StyledText>{description}</StyledText>
            <StyledLinks>
                <StyledNames>{name}</StyledNames>
                <StyledApp href="">{app}</StyledApp>
            </StyledLinks>
        </StyledContainer>
    )
}

export default Opinions