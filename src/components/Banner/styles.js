import styled from "styled-components";

const StyledBannerContainer = styled.div`
    width: 90%;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
`

const StyledInfoExtra = styled.div`
    width: 400px;
    height: 35px;
    margin-top: 50px;
    background-color: rgba(100, 106, 113, 0.5);
    border-radius: 30px;
    margin-left: auto;
    margin-right: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 3px;
`

const StyledTextExtraInfo = styled.p`
    color: var(--grey);
    font-size: 0.9rem;
    
`

const StyledLinkExtraInfo = styled.a`
    color: var(--blue);
    font-size: 0.9rem;
`
const StyledPrincipalTitle = styled.h1`
    font-size: 3.5rem;
    color: white;
    margin-left: auto;
    margin-right: auto;
`

const StyledPrincipalTitleSpan = styled.span`
    font-style: italic;
    font-size: 3.5rem;
    color: white;
`
const StyledDescription = styled.p`
    color: var(--grey);
    font-weight: 300;
    line-height: 30px;
    font-size: 1.4rem;
    margin-left: auto;
    margin-right: auto;
`
const StyledButtonContainer = styled.div`
width: 250px;
margin-left: auto;
margin-right: auto;
    display: flex;
    flex-direction: column;
    gap: 10px;
`
const StyledButtonStart = styled.button`
    padding: 10px;
    width: 250px;
    margin-right: 10px;
    background-color: var(--blue);
    color: white;
    border-radius: 5px;
    border: 1px solid transparent;
    position: relative;
`

const StyledExploreButton = styled.button`
    padding: 10px;
    width: 250px;
    background-color: var(--grey);
    color: white;
    border-radius: 5px;
    border: 1px solid transparent;
`


export { StyledBannerContainer, StyledInfoExtra, StyledLinkExtraInfo, StyledPrincipalTitle, StyledPrincipalTitleSpan, StyledTextExtraInfo, StyledButtonStart, StyledExploreButton, StyledDescription, StyledButtonContainer}