import { useParams } from "react-router-dom";
import styled from "styled-components";
import { CUSTOM_STYLES } from "../../GlobalStyles";
import GoBack from "../../sharedComponents/GoBack";
import PrimaryButton from "../../sharedComponents/PrimaryButton";
import SuggestionCard from "../../sharedComponents/SuggestionCard";
import { DataContext } from "../../DataContext";
import { useContext, useState } from "react";
import CommentThread from "./components/CommentThread";

function FeedbackDetail() {
  const { id } = useParams();
  const data = useContext(DataContext);
  const { productRequests } = data.data;

  const postDetails = productRequests.filter((item) => item.id === Number(id));
  const { title, description, upvotes, category, comments } = postDetails[0];

  // TODO - handle logic for id greater than available

  return (
    <>
      <StyledWrapper>
        <HeaderWrapper>
          <GoBack color="dark" />
          <PrimaryButton color={CUSTOM_STYLES.COLORS.royalBlue}>
            Edit Feedback
          </PrimaryButton>
        </HeaderWrapper>
        <SuggestionCard
          noClick={true}
          key={id}
          title={title}
          description={description}
          category={category}
          upvotes={upvotes}
          comments={comments}
          id={id}
        />
        <CommentThread data={data} comments={comments} />
      </StyledWrapper>
    </>
  );
}

export default FeedbackDetail;

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-top: 94px;
  gap: 1rem;
  max-width: 770px;
  margin: auto;
`;

const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
