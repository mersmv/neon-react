import Check from "../Check/Check"
import Texts from "../Texts/Texts"
import Title from "../Title/Title"

const Standars = () => {
    return (
        <div>
        <Title title={'Standardized dev environment'}></Title>
        <Texts text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'}></Texts>
        <Check tex={'Performance reviews'}></Check>
        <Check tex={'Objectives and goal setting'}></Check>
        <Check tex={'Manager check-ins'}></Check>
        </div>
    )
}

export default Standars