import { StyledContainerFuture, StyledIconFuture, StyledTextFuture, StyledTitleFuture } from "./styles"

const Future = ({src, title, text}) => {
    return (
        <StyledContainerFuture>
            <StyledIconFuture src={src} alt="" />
            <StyledTitleFuture>{title}</StyledTitleFuture>
            <StyledTextFuture>{text}</StyledTextFuture>
        </StyledContainerFuture>
    )
}

export default Future
