import Image from "next/image";
import styled from "styled-components";
import PropTypes from "prop-types";

import { Text } from "../components";

/**
 * Blog author component
 *
 * @prop {object} avatar - Profile picture image
 * @prop {array} names - list of author names
 *
 * see example on blog.jsx (line 70)
 */

export const Author = ({ avatar, names, ...props }) => (
  <Wrapper {...props}>
    <AvatarSection>
      <Avatar src={avatar} width={50} height={50} />
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
  width: 100%;
`;

const AvatarSection = styled.div`
  margin: 2%;
`;

const Avatar = styled(Image)`
  border-radius: 50%;
`;

const Names = styled.div`
  width: 60%;
`;

Author.propTypes = {
  avatar: PropTypes.object,
  names: PropTypes.array,
};
