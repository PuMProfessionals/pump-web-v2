import styled from "styled-components";
import Loader from "react-loader-spinner";

export const Loading = ({
  type = "ThreeDots",
  color,
  height = 80,
  width = 80,
  ...props
}) => (
  <Wrapper {...props}>
    <Loader type={type} color={color} height={height} width={width} />
  </Wrapper>
);
const Wrapper = styled.div`
  padding: 4vh 4vw;
`;
