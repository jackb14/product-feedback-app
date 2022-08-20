import styled from "styled-components";
import { Body2 } from "../../../GlobalStyles";
import Tags from "../../../sharedComponents/Tags";
import FeatureCard from "./FeatureCard";
import Roadmap from "./Roadmap";
import bgImage from "../../../assets/suggestions/desktop/background-header.png";

function SideBar() {
  return (
    <>
      <FlexWrapper>
        <FeatureCard bgImage={`url(${bgImage})`}>
          <StyledFeaturedCard>
            <h2>My SaaS</h2>
            <Body2>Feedback Board</Body2>
          </StyledFeaturedCard>
        </FeatureCard>
        <FeatureCard>
          <Tags />
        </FeatureCard>
        <FeatureCard>
          <Roadmap />
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
`;

const StyledFeaturedCard = styled.div`
  display: flex;
  height: 80px;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  color: white;
`;
