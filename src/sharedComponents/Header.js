import { CUSTOM_STYLES } from "../GlobalStyles";
import PrimaryButton from "./PrimaryButton";
import styled from "styled-components";
import { Link } from "react-router-dom";

function Header({ children }) {
  return (
    <>
      <StyledHeader>
        <StyledWrapper>{children}</StyledWrapper>
        <Link to="/add-feedback">
          <PrimaryButton color={CUSTOM_STYLES.COLORS.purple}>
            + Add Feedback
          </PrimaryButton>
        </Link>
      </StyledHeader>
    </>
  );
}

export default Header;

const StyledHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
  background-color: ${CUSTOM_STYLES.COLORS.darkBlue};
  padding: 14px 16px;
  border-radius: ${CUSTOM_STYLES.OTHER.borderRadius};
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
  }
`;

const StyledWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 1rem;
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
  }
`;
