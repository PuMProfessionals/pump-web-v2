import Image from "next/image";
import styled from "styled-components";
import PropTypes from "prop-types";

import DefaultProfile from "../public/about/tiedye-rect.png";
import { Text } from "../components";
import { media } from "../utils";

/**
 * Blog author component
 *
 * @prop {object} avatar - Profile picture image (Future implementation)
 * @prop {array} names - list of author names
 *
 * see example on blog.jsx (line 70)
 */

export const Author = ({ names }) => (
  <Wrapper>
    <AvatarSection>
      <Avatar src={DefaultProfile} width={50} height={50} />
      {/* {names.length === 1 ? (
        <Avatar src={avatar} width={50} height={50} />
      ) : (
        <Avatar src={DefaultProfile} width={50} height={50} />
      )} */}
    </AvatarSection>
    <Names>
      {names.length === 1 ? (
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

const AvatarSection = styled.div`
  margin: 2%;
`;

const Avatar = styled(Image)`
  border-radius: 50%;
`;

const Names = styled.div`
  word-break: break-work;
`;

Author.propTypes = {
  avatar: PropTypes.object,
  names: PropTypes.array,
};
