import styled from "styled-components";

const StyledContainer = styled.div`
    margin-left: auto;
    margin-right: auto;
    width: 700px;
    background-color: hsla(228, 13%, 27%, 1);
    text-align: start;
    padding: 50px;
    `

const StyledPhoto = styled.img`
    width: 100px;
    border-radius: 50%;
`
const StyledText = styled.p`
    color: var(--grey);
    font-size: 1.3rem;
`
const StyledLinks = styled.div`
    display: flex;
`

const StyledNames = styled.p`
    color: white;
`

const StyledApp = styled.a`
    color: var(--blue);
`

export {StyledApp, StyledContainer, StyledText,StyledLinks, StyledNames, StyledPhoto}