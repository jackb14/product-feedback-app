import styled from "styled-components";
import { Body1 } from "../../../GlobalStyles";
import CommentCount from "../../../sharedComponents/CommentCount";
import Tag from "../../../sharedComponents/Tag";
import Upvote from "../../../sharedComponents/Upvote";

function KanbanCard({
  status,
  color,
  title,
  description,
  category,
  upvotes,
  comments,
}) {
  const checkStatus = (status) => {
    if (status === "in-progress") {
      return "in progress";
    } else {
      return status;
    }
  };

  return (
    <>
      <CardWrapper color={color}>
        <FlexWrapper>
          <StyledCircle color={color} />
          <Body1 style={{ textTransform: "capitalize" }}>
            {checkStatus(status)}
          </Body1>
        </FlexWrapper>
        <h3>{title}</h3>
        <Body1>{description}</Body1>
        <TagWrapper>
          <Tag category={category} />
        </TagWrapper>
        <FlexBetweenWrapper>
          <Upvote
            upvotes={upvotes}
            direction="row"
            width="55px"
            height="40px"
          />
          <CommentCount comments={comments} />
        </FlexBetweenWrapper>
      </CardWrapper>
    </>
  );
}

export default KanbanCard;

const CardWrapper = styled.div`
  background-color: white;
  padding: 32px;
  border-radius: 5px;
  border-top: 6px solid ${(props) => props.color};
  margin-top: 32px;
`;

const FlexBetweenWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 16px;
`;

const FlexWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 0.8rem;
  margin-bottom: 8px;
`;

const StyledCircle = styled.div`
  height: 8px;
  width: 8px;
  background-color: ${(props) => props.color};
  border-radius: 50%;
`;

const TagWrapper = styled.div`
  margin-top: 16px;
  display: flex;
  justify-content: flex-start;
`;
