import { Link, useParams } from "react-router-dom";
import styled from "styled-components";
import { CUSTOM_STYLES } from "../../GlobalStyles";
import GoBack from "../../sharedComponents/GoBack";
import PrimaryButton from "../../sharedComponents/PrimaryButton";
import SuggestionCard from "../../sharedComponents/SuggestionCard";
import { DataContext } from "../../DataContext";
import { useContext } from "react";
import CommentThread from "./components/CommentThread";
import CommentCard from "./components/CommentCard";

function FeedbackDetail() {
  const { id } = useParams();
  const { data } = useContext(DataContext);

  const postDetails = data.filter((item) => item.id === Number(id));

  return (
    <>
      <StyledWrapper>
        <HeaderWrapper>
          <GoBack color="dark" />
          <Link to={`/post/${id}/edit`}>
            <PrimaryButton color={CUSTOM_STYLES.COLORS.royalBlue}>
              Edit Feedback
            </PrimaryButton>
          </Link>
        </HeaderWrapper>
        <SuggestionCard
          noClick={true}
          key={postDetails[0].id}
          title={postDetails[0].title}
          description={postDetails[0].description}
          category={postDetails[0].category}
          upvotes={postDetails[0].upvotes}
          totalCommentsAndReplies={postDetails[0].totalCommentsAndReplies}
          id={postDetails[0].id}
        />
        <CommentThread data={data} comments={postDetails[0].comments} />
        <CommentCard />
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
  @media (max-width: 768px) {
    padding-top: 32px;
    margin: 2rem;
  }
`;

const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
