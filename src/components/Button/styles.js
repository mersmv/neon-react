import styled from "styled-components";

const StyledStartButton = styled.a`
    width: 300px;
    padding-left: 150px;
    padding-right: 150px;
    padding-top: 12px;
    padding-bottom: 12px;
    background-color: var(--blue);
    color: white;
    border-radius: 5px;
    position: relative;

    &:hover{
        background-color: var(--dark-blue) ;
        cursor: pointer;
    }`



const StyledArrowButton = styled.img`
width: 20px;
height: 20px;
position: absolute;
right: 20px;
filter: invert(1);

&:hover{
    transform: translateX(10px);
    transition: 0.8s;
}
`

export {StyledArrowButton, StyledStartButton}