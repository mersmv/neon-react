import styled from "styled-components";


const StyledHeaderTop = styled.div`
    width: 95%;
    padding: 15px;
    margin-left: auto;
    margin-right: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const StyledLogo = styled.img`
    width: 50px;
    height: 50px;

`

const StyledUl = styled.ul`
    list-style: none;
    padding-left: 0;
    margin-bottom: 0;
    margin-top: 0;
    display: flex;
    gap: 30px;
`

const StyledSignIn = styled.a`
    color: var(--grey);

    &:hover{
        color: var(--dark-blue) ;
        cursor: pointer;
    }
`
//falta un hover que se haga azul el sign in, y otro en el get started

const StyledStartButton = styled.a`
    padding-left: 50px;
    padding-right: 50px;
    padding-top: 12px;
    padding-bottom: 12px;
    background-color: var(--blue);
    color: white;
    border-radius: 5px;
    padding-left: 10px;
    position: relative;

    &:hover{
        background-color: var(--dark-blue) ;
        cursor: pointer;
    }
`

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


export {StyledHeaderTop, StyledSignIn, StyledStartButton, StyledArrowButton, StyledLogo, StyledUl}