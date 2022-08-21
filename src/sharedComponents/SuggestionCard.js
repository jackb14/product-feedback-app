import { Body1, CUSTOM_STYLES } from "../GlobalStyles";
import Tag from "./Tag";
import styled from "styled-components";
import Upvote from "./Upvote";
import CommentCount from "./CommentCount";
import { Link } from "react-router-dom";

function SuggestionCard({
  noClick,
  title,
  description,
  category,
  comments,
  upvotes,
  id,
}) {
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
            {noClick === true ? (
              <HeadingWrapper>{title}</HeadingWrapper>
            ) : (
              <Link to={`/post/${id}`}>
                <HeadingWrapper hoverColor={CUSTOM_STYLES.COLORS.royalBlue}>
                  {title}
                </HeadingWrapper>
              </Link>
            )}
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

const HeadingWrapper = styled.h3`
  &:hover {
    color: ${(props) => props.hoverColor};
  }
`;
