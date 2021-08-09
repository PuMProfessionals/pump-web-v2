import React from "react";
import styled from "styled-components";
import { media } from "../utils";

export const SectionWrapper = ({
	children,
	backgroundPath,
	mobilePath,
	mobileThreshold = 0,
  ...props
}) => {
	return (
		<div>
			<ContentWrapper
				backgroundPath={backgroundPath}
				mobilePath={mobilePath}
				mobileThreshold={mobileThreshold}
			>
				{children}
			</ContentWrapper>
		</div>
	);
}

const ContentWrapper = styled.div`
	width: 100%;
	margin: 0;
	padding: 0;
	${({ backgroundPath, mobilePath, mobileThreshold }) => `
		@media (min-width: ${mobileThreshold+1}px) {
			background-image: url('${backgroundPath}');
		}
		@media (max-width: ${mobileThreshold}px) {
			background-image: url('${mobilePath}');
		}
	`};
	background-repeat: no-repeat;
	background-size: 100%;
	overflow: visible;
`;