import Texts from "../Texts/Texts"
import { StyledCheck, StyledCheckCont, StyledCheckText } from "./styles"

const Check = ({tex}) =>{
    return (
        <StyledCheckCont>
            <StyledCheck src="./public/images/check.svg" alt="" />
            <StyledCheckText>{tex}</StyledCheckText> 
        </StyledCheckCont>
    )
}

export default Check