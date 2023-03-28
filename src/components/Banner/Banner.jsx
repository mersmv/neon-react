import { StyledBannerContainer, StyledButtonContainer, StyledButtonStart, StyledDescription, StyledExploreButton, StyledInfoExtra, StyledLinkExtraInfo, StyledPrincipalTitle, StyledPrincipalTitleSpan, StyledTextExtraInfo } from "./styles"

const Banner = () => {
    return (
        <StyledBannerContainer>
            <StyledInfoExtra>
                <StyledTextExtraInfo>Launching Infinite Workspaces. </StyledTextExtraInfo>
                <StyledLinkExtraInfo href="">Learn More</StyledLinkExtraInfo>
            </StyledInfoExtra>
            <StyledPrincipalTitle>Where the world builds <StyledPrincipalTitleSpan> software</StyledPrincipalTitleSpan></StyledPrincipalTitle>
            <StyledDescription>Our landing page template works on all devices, so you only have to set it up once, and get beautiful results forever.</StyledDescription>

            <StyledButtonContainer>
            <StyledButtonStart>Get Started For Free</StyledButtonStart>
            <StyledExploreButton>Explore Docs</StyledExploreButton>
            </StyledButtonContainer>
        </StyledBannerContainer>
    )
}

export default Banner
