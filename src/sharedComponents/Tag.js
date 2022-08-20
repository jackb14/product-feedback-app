import { CUSTOM_STYLES } from "../GlobalStyles";
import styled from "styled-components";
import { Body3 } from "../GlobalStyles";

function Tag({ category }) {
  return (
    <>
      <StyledWrapper>
        <Body3>{category}</Body3>
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

  &:hover {
    background-color: ${CUSTOM_STYLES.COLORS.royalBlue};
    color: white;
    cursor: pointer;
  }
`;
