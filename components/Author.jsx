import Image from "next/image";
import styled from "styled-components";
import PropTypes from "prop-types";

import { Text } from "../components";
import { media } from "../utils";

/**
 * Blog author component
 *
 * @prop {object} avatar - Profile picture image
 * @prop {array} names - list of author names
 *
 * see example on blog.jsx (line 70)
 */

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

Author.propTypes = {
  avatar: PropTypes.object,
  names: PropTypes.array,
};
