import { CUSTOM_STYLES } from "../GlobalStyles";
import styled from "styled-components";

function PrimaryButton({ children, color, padding }) {
  return (
    <>
      <StyledButton padding={padding} style={{ backgroundColor: color }}>
        {children}
      </StyledButton>
    </>
  );
}

export default PrimaryButton;

const StyledButton = styled.button`
  padding: ${(props) => props.padding || "12px 24px"};
  border-radius: ${CUSTOM_STYLES.OTHER.borderRadius};
  border: none;
  color: white;
  font-weight: 600;

  @media (max-width: 768px) {
    width: 200px;
  }

  &:hover {
    cursor: pointer;
    opacity: 90%;
  }
`;
