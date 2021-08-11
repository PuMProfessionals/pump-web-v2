import Image from "next/image";
import styled from "styled-components";

import ProfilePicture from "../public/blog/pfp.svg";

export const Author = () => (
  <Wrapper>
    <Image src={ProfilePicture} /> {/* margin between text and profile picture */}
    <p>
      author&apos;s name, author&apos;s name, author&apos;s name, author&apos;s name
    </p>
    {/* Change author text to Text component*/}
  </Wrapper>
);

const Wrapper = styled.div`
  display: flex;
  background-color: lightblue;
   {
    /* margin around section*/
  }
  width: 20%;
`;
