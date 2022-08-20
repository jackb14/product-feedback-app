import styled from "styled-components";
import { Body1, CUSTOM_STYLES } from "../../../GlobalStyles";
import Header from "../../../sharedComponents/Header";
import SuggestionCard from "./SuggestionCard";
import suggestionsIcon from "../../../assets/suggestions/icon-suggestions.svg";
import { DataContext } from "../../../DataContext";
import { useContext } from "react";
import LargeCard from "./LargeCard";
import notFound from "../../../assets/suggestions/illustration-empty.svg";

function MainContent() {
  const data = useContext(DataContext);
  const { productRequests } = data.data;

  const suggestions = productRequests
    .filter((item) => item.status === "suggestion")
    .map((item) => (
      <SuggestionCard
        key={item.id}
        title={item.title}
        description={item.description}
        category={item.category}
        upvotes={item.upvotes}
        comments={item.comments}
      />
    ));

  const noFeedbackCard = (
    <LargeCard
      img={notFound}
      heading="There is no feedback yet."
      body="Got a suggestion? Found a bug that needs to be squashed? We love hearing about new ideas to improve our app."
      btn="+ Add Feedback"
      btnColor={CUSTOM_STYLES.COLORS.purple}
    />
  );

  return (
    <>
      <StyledWrapper>
        <Header>
          <img src={suggestionsIcon} alt="Suggestions icon" />
          <h2 style={{ color: "white" }}>
            {suggestions.length}{" "}
            {suggestions.length !== 1 ? "Suggestions" : "Suggestion"}
          </h2>
          <MarginWrapper>
            <Body1 style={{ color: "white" }}>Sort by:</Body1>
          </MarginWrapper>
        </Header>
        {suggestions ? suggestions : noFeedbackCard}
      </StyledWrapper>
    </>
  );
}

export default MainContent;

const StyledWrapper = styled.div`
  flex: 1;
`;

const MarginWrapper = styled.div`
  margin-left: auto;
`;
