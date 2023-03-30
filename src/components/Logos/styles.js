import styled from "styled-components";

const StyledLogo = styled.img`
    width: 150px;

`

const StyledLogocont = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: auto;
    justify-content: center;
    gap: 30px;
    margin-right: auto;
    justify-content: center;
    filter: invert(1);
`
const StyledLogoGroups = styled.div`
    display: flex;
    justify-content: center;
    gap: 100px;
`


export {StyledLogo, StyledLogocont, StyledLogoGroups}