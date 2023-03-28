import Banner from "../Banner/Banner"
import HeaderTop from "../HeaderTop/HeaderTop"
import { StyledHeader } from "./styles"

const Header = () => {
    return (
        <StyledHeader>
            <HeaderTop/>
            <Banner/>
        </StyledHeader>
    )
}

export default Header