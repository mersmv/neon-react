import Texts from "../Texts/Texts"
import Title from "../Title/Title"
import { StyledImg } from "./styles"

const Privacy = () => {
    return (
        <div>
            <Title title={'Use sensitive data without sacrificing privacy'}></Title>
            <Texts text={'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est'}></Texts>
            <StyledImg src="./public/images/features-02.png" alt="Imagen de programacion" />
        </div>
    )
}

export default Privacy