import styled from "styled-components";
import { Body1 } from "../../../GlobalStyles";
import Header from "../../../sharedComponents/Header";
import SuggestionCard from "./SuggestionCard";
import suggestionsIcon from "../../../assets/suggestions/icon-suggestions.svg";
import { DataContext } from "../../../DataContext";
import { useContext } from "react";

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

  return (
    <>
      <StyledWrapper>
        <Header>
          <img src={suggestionsIcon} alt="Suggestions icon" />
          <h2>X Suggestions</h2>
          <MarginWrapper>
            <Body1>Sort by:</Body1>
          </MarginWrapper>
        </Header>
        {suggestions}
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
