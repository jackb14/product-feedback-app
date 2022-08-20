import { Body1, CUSTOM_STYLES } from "../../../GlobalStyles";
import Tag from "../../../sharedComponents/Tag";
import styled from "styled-components";
import Upvote from "../../../sharedComponents/Upvote";
import CommentCount from "../../../sharedComponents/CommentCount";

function SuggestionCard({ title, description, category, comments, upvotes }) {
  return (
    <>
      <StyledWrapper>
        <InnerWrapper>
          <Upvote
            upvotes={upvotes}
            direction="column"
            width="40px"
            height="55px"
          />
          <div>
            <h3>{title}</h3>
            <Body1>{description}</Body1>
            <MarginWrapper>
              <Tag category={category} />
            </MarginWrapper>
          </div>
        </InnerWrapper>
        <div>
          <CommentCount comments={comments} />
        </div>
      </StyledWrapper>
    </>
  );
}

export default SuggestionCard;

const StyledWrapper = styled.div`
  margin-top: 24px;
  background-color: white;
  border-radius: ${CUSTOM_STYLES.OTHER.borderRadius};
  padding: 28px 32px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const InnerWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 2rem;
`;

const MarginWrapper = styled.div`
  margin-top: 12px;
  display: flex;
  justify-content: flex-start;
`;
