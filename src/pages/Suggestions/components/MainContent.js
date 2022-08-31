import styled from "styled-components";
import { Body1, CUSTOM_STYLES } from "../../../GlobalStyles";
import Header from "../../../sharedComponents/Header";
import suggestionsIcon from "../../../assets/suggestions/icon-suggestions.svg";
import { useContext, useState } from "react";
import LargeCard from "./LargeCard";
import notFound from "../../../assets/suggestions/illustration-empty.svg";
import SuggestionCard from "../../../sharedComponents/SuggestionCard";
import { FilteredDataContext } from "../FilteredDataContext";
import DropdownSelector from "../../../sharedComponents/DropdownSelector";

function MainContent() {
  const { filteredData } = useContext(FilteredDataContext);
  const [categoryValue, setCategoryValue] = useState();

  console.log("filteredData", filteredData);

  const sortData = () => {
    if (categoryValue === "Most Upvotes") {
      return filteredData.sort((a, b) => {
        return b.upvotes - a.upvotes;
      });
    } else if (categoryValue === "Least Upvotes") {
      return filteredData.sort((a, b) => {
        return a.upvotes - b.upvotes;
      });
    } else if (categoryValue === "Most Comments") {
      return filteredData.sort((a, b) => {
        return b.totalCommentsAndReplies - a.totalCommentsAndReplies;
      });
    } else if (categoryValue === "Least Comments") {
      return filteredData.sort((a, b) => {
        return a.totalCommentsAndReplies - b.totalCommentsAndReplies;
      });
    }
  };
  sortData();

  const suggestions = filteredData
    .filter((item) => item.status === "suggestion")
    .map((item) => (
      <SuggestionCard
        key={item.id}
        title={item.title}
        description={item.description}
        category={item.category}
        upvotes={item.upvotes}
        totalComments={item.totalComments}
        totalReplies={item.totalReplies}
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
            <div style={{ width: "100px" }}>
              <Body1 style={{ color: "white" }}>Sort by:</Body1>
            </div>
            <DropdownSelector
              type="header"
              setValue={setCategoryValue}
              categoryValue={categoryValue}
              options={[
                "Most Upvotes",
                "Least Upvotes",
                "Most Comments",
                "Least Comments",
              ]}
            />
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
  margin-left: 3rem;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  position: relative;
`;
