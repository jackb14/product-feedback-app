import { CUSTOM_STYLES } from "../GlobalStyles";
import styled from "styled-components";

function PrimaryButton({ children, link, color }) {
  return (
    <>
      <StyledButton style={{ backgroundColor: color }}>{children}</StyledButton>
    </>
  );
}

export default PrimaryButton;

const StyledButton = styled.button`
  padding: 12px 24px;
  border-radius: ${CUSTOM_STYLES.OTHER.borderRadius};
  border: none;
  color: white;

  &:hover {
    cursor: pointer;
    opacity: 90%;
  }
`;
