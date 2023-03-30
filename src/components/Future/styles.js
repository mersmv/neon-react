import styled from "styled-components";

const StyledContainerFuture = styled.div`
    margin-left: auto;
    margin-right: auto;
    display: flex;

    text-align: center;
    flex-direction: column;
    gap: 10px;
`

const StyledIconFuture = styled.img`
    width: 70px;
    margin-left: auto;
    margin-right: auto;
`
const StyledTitleFuture = styled.h2`
    font-size: 1.7rem;
    color: white;
`

const StyledTextFuture = styled.p`
    font-size: 1.3rem;
    width: 400px;
    color: var(--grey);
`

export {StyledContainerFuture, StyledIconFuture, StyledTextFuture, StyledTitleFuture}