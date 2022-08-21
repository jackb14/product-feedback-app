import styled from "styled-components";
import { Body1, CUSTOM_STYLES } from "../GlobalStyles";

function FormElementIntro({ title, description, htmlFor }) {
  return (
    <>
      <StyledWrapper>
        <StyledLabel htmlFor={htmlFor}>{title}</StyledLabel>
        <Body1>{description}</Body1>
      </StyledWrapper>
    </>
  );
}

export default FormElementIntro;

const StyledWrapper = styled.div`
  margin: 24px 0 16px 0;
`;

const StyledLabel = styled.label`
  font-size: 16px;
  line-height: 23px;
  font-weight: 600;
  color: ${CUSTOM_STYLES.COLORS.darkBlue};
`;
