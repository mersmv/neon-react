import styled from "styled-components";

const StyledCardContainer = styled.div`
    width: 60%;
    text-align: start;
    background-color: hsla(228, 13%, 27%, 1);
    border-radius: 2px;
    margin-top: 100px;
    margin-left: auto;
    padding: 20px;
    margin-right: auto;

`

const StyledTitle = styled.h1`
    color: white;
    font-size: 1.5rem;
`

const StyledSemiTitle = styled.h2`
    color: var(--grey);
    font-size: 1.2.6rem;
`

const StyledSpan = styled.span`
    color: white;
    font-size: 2.9rem;
`

const StyledText = styled.p`
    font-size: 1.7rem;
    color: var(--grey);
`

const StyledCheckTitle = styled.h2`
    color: var(--grey);
    font-size: 1.6rem;
`

export {StyledCardContainer, StyledCheckTitle, StyledSemiTitle, StyledSpan, StyledText, StyledTitle }