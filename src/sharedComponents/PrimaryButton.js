import { CUSTOM_STYLES } from "../GlobalStyles";
import styled from "styled-components";

function PrimaryButton({ children, link, variant }) {
  return (
    <>
      <StyledButton>{children}</StyledButton>
    </>
  );
}

export default PrimaryButton;

const StyledButton = styled.button`
  background-color: red;
  padding: 12px 24px;
  border-radius: ${CUSTOM_STYLES.OTHER.borderRadius};
  border: none;
  color: white;

  &:hover {
    cursor: pointer;
  }
`;
