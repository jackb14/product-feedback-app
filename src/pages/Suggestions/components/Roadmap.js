import styled from "styled-components";
import { Body1, Body2, Body3 } from "../../../GlobalStyles";

function Roadmap() {
  return (
    <>
      <FlexWrapper>
        <h2>Roadmap</h2>
        <Body3>View</Body3>
      </FlexWrapper>
      <Spacer />
      <FlexWrapper>
        <Circle />
        <Body2>Progress</Body2>
        <InnerMargin>
          <Body1 style={{ fontWeight: 700 }}>2</Body1>
        </InnerMargin>
      </FlexWrapper>
    </>
  );
}

export default Roadmap;

const FlexWrapper = styled.div`
  display: flex;
  gap: 0.5rem;
  justify-content: space-between;
  align-items: center;
`;
const Circle = styled.div`
  height: 8px;
  width: 8px;
  background-color: blue;
  border-radius: 50%;
`;

const InnerMargin = styled.div`
  margin-left: auto;
`;

const Spacer = styled.div`
  height: 10px;
`;
