import Future from "../Future/Future"
import Title from "../Title/Title"
import { StyledImg, StyledInfosCont, StyledObjetiveCont } from "./styles"

const Objetives = () => {
    return (
        <StyledObjetiveCont>
            <Title title='Focus on solving big problems'/>
            <StyledImg src="./public/images/features.svg" alt="" />
            <StyledInfosCont>
                <Future src='./public/images/icon-square.svg' title='Ready for the future' text='A flexible foundation that evolves with complex ecosystem.'/>
                <Future src='./public/images/icon-brackets.svg' title='Ready for the future' text='A flexible foundation that evolves with complex ecosystem.'/>
                <Future src='./public/images/icon-check-list.svg' title='Ready for the future' text='A flexible foundation that evolves with complex ecosystem.'/>
            </StyledInfosCont>
        </StyledObjetiveCont>
    )
}

export default Objetives