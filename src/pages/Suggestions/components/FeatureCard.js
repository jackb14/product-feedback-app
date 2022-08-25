import { CUSTOM_STYLES } from "../../../GlobalStyles";
import styled from "styled-components";

function FeatureCard({ children, bgImage }) {
  return (
    <>
      <StyledWrapper style={{ background: bgImage || "white" }}>
        {children}
      </StyledWrapper>
    </>
  );
}

export default FeatureCard;

const StyledWrapper = styled.div`
  border-radius: ${CUSTOM_STYLES.OTHER.borderRadius};
  padding: 24px;
  max-width: 250px;

  @media (max-width: 768px) {
    /* padding: 16px; */

    &:nth-child(1) {
      max-width: 180px;
      height: 100%;
      max-height: 160px;
    }

    &:nth-child(2) {
      max-width: 260px;
      max-height: 160px;
    }

    &:nth-child(3) {
      width: 100%;
      max-width: 200px;
      max-height: 160px;
    }
  }
`;
