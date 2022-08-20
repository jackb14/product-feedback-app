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
  max-width: 255px;
`;
