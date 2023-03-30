import styled from "styled-components";

const StyledCheckCont = styled.div`
    width: 400px;
    margin-left: auto;
    margin-right: auto;
    display: flex;
    justify-content: start;
    gap: 5px;
`

const StyledCheck = styled.img`
    width: 20px;
`
const StyledCheckText = styled.p`
    color: var(--grey);
    font-size: 1.6rem;
    line-height: 35px;
    text-align: start;
    margin-left: auto;
    margin-right: auto;
    width: 80%;
`

export {StyledCheckCont, StyledCheck, StyledCheckText}