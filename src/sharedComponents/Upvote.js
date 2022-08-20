import styled from "styled-components";
import { Body3, CUSTOM_STYLES } from "../GlobalStyles";
import upArrow from "../assets/shared/icon-arrow-up.svg";

function Upvote({ upvotes, direction, height, width }) {
  return (
    <>
      <StyledUpvote
        style={{ flexDirection: direction, width: width, height: height }}
      >
        <img src={upArrow} alt="upvote icon" />
        <Body3>{upvotes}</Body3>
      </StyledUpvote>
    </>
  );
}

export default Upvote;

const StyledUpvote = styled.div`
  background-color: ${CUSTOM_STYLES.COLORS.blueyWhite};
  border-radius: ${CUSTOM_STYLES.OTHER.borderRadius};
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;
