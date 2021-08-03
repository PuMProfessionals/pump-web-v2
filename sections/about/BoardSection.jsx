import styled from "styled-components";

import { Card } from "../../components";
import { baseTheme } from "../../theme";
import { media } from "../../utils";

export const BoardSection = ({
  board,
  boardDescription,
  boardMembers, // array
  ...props
}) => {
  return (
    <Wrapper {...props}>
      <div>
        <Title>{board}</Title>
        <p>{boardDescription}</p>
        <Board>
            {boardMembers.map((member) => (
            <SCard
                key={`About__Page__Card__${member.name}`}
                thumbnail={member.avatar}
                title={member.name}
                imageWidth={member.imageWidth}
                imageHeight={member.imageHeight}
                cardHeight={member.cardHeight}
                contentPadding={"5px"}
                component={
                <PositionWrapper>
                    <Name fontcolor={member.fontColor}>{member.name}</Name>
                    <Position fontcolor={member.fontColor}>{member.position}</Position>
                </PositionWrapper>
                }
            />
            ))}
        </Board>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 0 7%;
  margin-bottom: 5vh;
`;
const Title = styled.h2`
  ${({ theme }) => `
        font-family: ${theme.font.kumbh};
        font-weight: 700;
    `};
`;
const Name = styled.h3`
  ${({ theme, fontcolor }) => `
        font-family: ${theme.font.kumbh};
        font-weight: 700;
        font-size: 1.4rem;
        color: ${fontcolor ? fontcolor: baseTheme.colors.navy};
    `};
`;
const Position = styled.p`
  ${({ theme, fontcolor }) => `
        font-family: ${theme.font.kumbh};
        color: ${fontcolor ? fontcolor : baseTheme.colors.navy};
        font-size: 1.1rem!important;
        margin-top: -15px;
    `};
`;
const PositionWrapper = styled.div`
    text-align: center;
`;
const Board = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    margin-top: 5vh;
    ${media(
        "tablet",
        `
            flex-direction: column;
        `
    )};
`;
const SCard = styled(Card)`
    margin: auto;
    margin-bottom: 5vh;
`;
