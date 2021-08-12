import Image from "next/image";
import styled from "styled-components";

import { Text } from "../components";
import { media } from "../utils";

export const Author = ({ avatar, names }) => (
  <Wrapper>
    <Avatar>
      <Image src={avatar} width={50} height={50} />
    </Avatar>
    <Names>
      {names.length == 1 ? (
        <Text>{names}</Text>
      ) : (
        <Text>{names.join(", ").toString()}</Text>
      )}
    </Names>
  </Wrapper>
);

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  width: 25%;
  padding: 0.5rem;
  ${media(
    "700",
    `
      width: 60%;
      `
  )};
`;

const Avatar = styled.div`
  margin: 2%;
`;

const Names = styled.div`
  word-break: break-work;
`;
