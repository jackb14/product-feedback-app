import { Body1 } from "../GlobalStyles";
import commentIcon from "../assets/shared/icon-comments.svg";
import styled from "styled-components";

function CommentCount({ totalComments, totalReplies }) {
  // const calculateCommentCount = () => {
  //   if (comments) {
  //     return comments.length;
  //   } else {
  //     return 0;
  //   }
  // };

  return (
    <>
      <StyledWrapper>
        <img src={commentIcon} alt="comment icon" />
        <Body1 style={{ fontWeight: 600 }}>
          {totalComments + totalReplies}
        </Body1>
      </StyledWrapper>
    </>
  );
}

export default CommentCount;

const StyledWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 0.5rem;
`;
