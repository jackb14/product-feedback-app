import styled from "styled-components";
import { CUSTOM_STYLES } from "../../../GlobalStyles";
import Reply from "./Reply";

function CommentThread({ comments }) {
  // get total comments and replies
  const commentsLength = () => {
    if (comments) {
      return comments.length;
    } else {
      return 0;
    }
  };

  const numOfComments = commentsLength();

  const replies = () => {
    if (numOfComments !== 0) {
      return comments.map((comment) => {
        if (comment.replies) {
          return comment.replies.map((item) => item).length;
        } else {
          return 0;
        }
      });
    } else {
      return [0];
    }
  };

  const newArray = replies();

  const totalReplies = newArray.reduce((prev, cur) => prev + cur, 0);
  const totalCommentsAndReplies = totalReplies + numOfComments;

  // get comments and replies for rendering
  const commentMap = () =>
    comments.map((comment, i) => {
      if (comment.replies) {
        return (
          <div key={i}>
            <OuterWrapper>
              <p>IMAGE</p>
              <InnerWrapper>
                <CommentHeaderWrapper>
                  <UserWrapper>
                    <Title>{comment.user.name}</Title>
                    <TextWrapper>@{comment.user.username}</TextWrapper>
                  </UserWrapper>
                  <ReplyText>Reply</ReplyText>
                </CommentHeaderWrapper>
                <TextWrapper>{comment.content}</TextWrapper>
                <Reply placeholder="Type your comment here" />
              </InnerWrapper>
            </OuterWrapper>
            {comment.replies.map((reply, i) => {
              return (
                <ReplyWrapper key={i}>
                  <OuterWrapper>
                    <p>IMAGE</p>
                    <InnerWrapper>
                      <CommentHeaderWrapper>
                        <UserWrapper>
                          <Title>{reply.user.name}</Title>
                          <TextWrapper>@{reply.user.username}</TextWrapper>
                        </UserWrapper>
                        <ReplyText>Reply</ReplyText>
                      </CommentHeaderWrapper>
                      <TextWrapper>
                        <span
                          style={{
                            color: CUSTOM_STYLES.COLORS.purple,
                            fontWeight: 600,
                          }}
                        >
                          @{reply.replyingTo}
                        </span>{" "}
                        {reply.content}
                      </TextWrapper>
                    </InnerWrapper>
                  </OuterWrapper>
                </ReplyWrapper>
              );
            })}
          </div>
        );
      } else {
        return (
          <NoReplyWrapper key={i}>
            <OuterWrapper>
              <p>IMAGE</p>
              <InnerWrapper>
                <CommentHeaderWrapper>
                  <UserWrapper>
                    <Title>{comment.user.name}</Title>
                    <TextWrapper>@{comment.user.username}</TextWrapper>
                  </UserWrapper>
                  <ReplyText>Reply</ReplyText>
                </CommentHeaderWrapper>
                <TextWrapper>{comment.content}</TextWrapper>
              </InnerWrapper>
            </OuterWrapper>
          </NoReplyWrapper>
        );
      }
    });

  return (
    <>
      <StyledWrapper>
        <h2>
          {totalCommentsAndReplies}{" "}
          {totalCommentsAndReplies === 1 ? "Comment" : "Comments"}
        </h2>
        {comments ? commentMap() : "No Comments"}
      </StyledWrapper>
    </>
  );
}

export default CommentThread;

const StyledWrapper = styled.div`
  background-color: white;
  border-radius: ${CUSTOM_STYLES.OTHER.borderRadius};
  padding: 24px 34px;
`;

const OuterWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 1.5rem;
  padding-bottom: 32px;
  margin-top: 32px;
`;

const NoReplyWrapper = styled.div`
  border-bottom: 2px solid ${CUSTOM_STYLES.COLORS.lightGrey};
`;

const InnerWrapper = styled.div`
  width: 100%;
`;

const CommentHeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;

const UserWrapper = styled.div`
  margin-bottom: 20px;
`;

const Title = styled.p`
  color: ${CUSTOM_STYLES.COLORS.darkBlue};
  font-weight: 600;
`;

const TextWrapper = styled.p`
  color: ${CUSTOM_STYLES.COLORS.darkGrey};
`;

const ReplyWrapper = styled.div`
  margin-left: 45px;
  margin-bottom: 36px;
`;

const ReplyText = styled.p`
  color: ${CUSTOM_STYLES.COLORS.royalBlue};
  font-weight: 600;
  font-size: 15px;
`;
