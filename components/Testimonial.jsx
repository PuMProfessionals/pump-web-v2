import styled from "styled-components";
import { ChatRightQuoteFill } from "@styled-icons/bootstrap/ChatRightQuoteFill";
import { media } from "../utils";
import { Text } from "./Text";

export const Testimonial = ({
    testimonial,
    author,
    ...props
}) => {
    return (
        <Wrapper {...props}>
            <Logo />
            <SText>
                {testimonial}
            </SText>
            <SText bold="true">
                {author}
            </SText>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    width: 60%;
    padding: 5%;
    border-radius: 44px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    ${({ theme }) => `
        background-color: ${theme.colors.navy};
    `}
    ${media(
        500,
        `
            width: 80%;
            padding: 8%;
        `
    )};
`;
const Logo = styled(ChatRightQuoteFill)`
    width: 80px;
    height: 80px;
    text-align: center;
    ${({ theme }) => `
        color: ${theme.colors.yellow};
    `}
`;
const SText = styled(Text)`
    ${({ theme }) => `
        color: ${theme.colors.white};
        font-family: ${theme.font.josefin};
    `}
`;