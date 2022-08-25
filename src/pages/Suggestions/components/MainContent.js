import styled from "styled-components";
import { CUSTOM_STYLES } from "../../../GlobalStyles";
import Header from "../../../sharedComponents/Header";
import suggestionsIcon from "../../../assets/suggestions/icon-suggestions.svg";
import { useContext } from "react";
import LargeCard from "./LargeCard";
import notFound from "../../../assets/suggestions/illustration-empty.svg";
import SuggestionCard from "../../../sharedComponents/SuggestionCard";
import { FilteredDataContext } from "../FilteredDataContext";

function MainContent() {
  const { filteredData } = useContext(FilteredDataContext);

  const suggestions = filteredData
    .filter((item) => item.status === "suggestion")
    .map((item) => (
      <SuggestionCard
        key={item.id}
        title={item.title}
        description={item.description}
        category={item.category}
        upvotes={item.upvotes}
        comments={item.comments}
        id={item.id}
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
            {/* <Body1 style={{ color: "white" }}>Sort by:</Body1> */}
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
