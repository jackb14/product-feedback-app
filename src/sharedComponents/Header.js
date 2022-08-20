import { CUSTOM_STYLES } from "../GlobalStyles";
import PrimaryButton from "./PrimaryButton";
import styled from "styled-components";

function Header({ children }) {
  return (
    <>
      <StyledHeader>
        <StyledWrapper>{children}</StyledWrapper>
        <PrimaryButton color={CUSTOM_STYLES.COLORS.purple}>
          + Add Feedback
        </PrimaryButton>
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
`;

const StyledWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 350px;
  gap: 1rem;
`;
