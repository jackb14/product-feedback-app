import { CUSTOM_STYLES } from "../GlobalStyles";
import styled from "styled-components";

function Tag({ category }) {
  return (
    <>
      <StyledWrapper>
        <StyledBody>{category}</StyledBody>
      </StyledWrapper>
    </>
  );
}

export default Tag;

const StyledWrapper = styled.div`
  background-color: ${CUSTOM_STYLES.COLORS.blueyWhite};
  padding: 5px 16px;
  border-radius: ${CUSTOM_STYLES.OTHER.borderRadius};
  text-transform: capitalize;
  color: ${CUSTOM_STYLES.COLORS.royalBlue} !important;

  &:hover {
    background-color: ${CUSTOM_STYLES.COLORS.royalBlue};
    color: white !important;
    cursor: pointer;
  }
`;

const StyledBody = styled.p`
  font-size: 13px;
  line-height: 19px;
  font-weight: 600;
`;
