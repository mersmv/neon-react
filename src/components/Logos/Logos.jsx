import { StyledLogo, StyledLogocont, StyledLogoGroups } from "./styles"

const Logos = () => {
    return (
        <StyledLogocont>
            <StyledLogoGroups>
            <StyledLogo src="./public/images/facebook.svg" alt="" />
            <StyledLogo src="./public/images/tinder.svg" alt="" />
            </StyledLogoGroups>
            <StyledLogoGroups>
            <StyledLogo src="./public/images/airbnb.svg" alt="" />
            <StyledLogo src="./public/images/hubspot.svg" alt="" />
            </StyledLogoGroups>
            <StyledLogoGroups>

            <StyledLogo src="./public/images/amazon.svg" alt="" />
            </StyledLogoGroups>
        </StyledLogocont>
    )
}

export default Logos