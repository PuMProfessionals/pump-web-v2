import styled from "styled-components";

import { Card, Text } from "../../components";

export const BoardSection = ({
    board,
    boardDescription,
    boardMembers, // array
    ...props
}) => {
    return (
        <Wrapper {...props}>
            <div>
                <Title>
                    {board}
                </Title>
                <p>
                    {boardDescription}
                </p>
                {boardMembers.map(member => (
                    <Card
                        key={`About__Page__Card__${member.name}`}
                        thumbnail={member.avatar}
                        title={member.name}
                        imageWidth={300}
                        cardHeight={300}
                        component={
                            <div>
                                <Text>
                                    {member.name}
                                </Text>
                            </div>
                        }
                    />
                ))}
            </div>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    padding: 0 5%;
`;
const Title = styled.h2`
    ${({ theme }) => `
        font-family: ${theme.font.kumbh};
        font-weight: 700;
    `};
`;
