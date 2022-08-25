import styled from "styled-components";
import { Body2 } from "../../../GlobalStyles";
import Tags from "../../../sharedComponents/Tags";
import FeatureCard from "./FeatureCard";
import Roadmap from "./Roadmap";
import bgImage from "../../../assets/suggestions/desktop/background-header.png";
import { DataContext } from "../../../DataContext";
import { useContext } from "react";

function SideBar() {
  const { data } = useContext(DataContext);

  // for tags component
  const categoriesMap = data.map((item) => item.category);
  // Set removes duplicates and then converts to array
  const categories = [...new Set([...categoriesMap])];

  return (
    <>
      <FlexWrapper>
        <FeatureCard bgImage={`url(${bgImage})`}>
          <StyledFeaturedCard>
            <h2 style={{ color: "white" }}>My SaaS</h2>
            <Body2 style={{ color: "white" }}>Feedback Board</Body2>
          </StyledFeaturedCard>
        </FeatureCard>
        <FeatureCard>
          <Tags categories={categories} hover="true" />
        </FeatureCard>
        <FeatureCard>
          <Roadmap productRequests={data} />
        </FeatureCard>
      </FlexWrapper>
    </>
  );
}

export default SideBar;

const FlexWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  flex: 0 1 255px;
  @media (max-width: 768px) {
    flex-direction: row;
    width: 100%;
    flex: 0 1 50px;
  }
`;

const StyledFeaturedCard = styled.div`
  display: flex;
  height: 80px;
  min-width: 200px;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
`;
