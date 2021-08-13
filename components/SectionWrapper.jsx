import styled from "styled-components";

export const SectionWrapper = ({
  children,
  backgroundPath,
  mobilePath,
  mobileThreshold = 0,
  verticalOffset = 0,
  horizontalOffset = 0,
  mobileVerticalOffset = 0,
  mobileHorizontalOffset = 0,
  ...props
}) => {
  return (
    <ContentWrapper
      backgroundPath={backgroundPath}
      mobilePath={mobilePath}
      mobileThreshold={mobileThreshold}
      verticalOffset={verticalOffset}
      horizontalOffset={horizontalOffset}
      mobileVerticalOffset={mobileVerticalOffset}
      mobileHorizontalOffset={mobileHorizontalOffset}
      {...props}
    >
      {children}
    </ContentWrapper>
  );
};

const ContentWrapper = styled.div`
  width: 100%;
  margin: 0;
  padding: 0;
  ${({
    backgroundPath,
    mobilePath,
    mobileThreshold,
    verticalOffset,
    horizontalOffset,
    mobileVerticalOffset,
    mobileHorizontalOffset,
  }) => `
		@media (min-width: ${mobileThreshold + 1}px) {
			background-image: url('${backgroundPath}');
			background-position: ${horizontalOffset} ${verticalOffset};
		}
		@media (max-width: ${mobileThreshold}px) {
			background-image: ${mobilePath ? `url('${mobilePath}')` : "none"};
			background-position: ${mobileHorizontalOffset} ${mobileVerticalOffset};
		}
	`};
  background-repeat: no-repeat;
  background-size: 100%;
  overflow: visible;
`;
