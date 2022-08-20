import styled from "styled-components";
import { Body1, Body2, Body3 } from "../../../GlobalStyles";

function Roadmap({ productRequests }) {
  // console.log(occuranceCount);

  // for roadmap component
  // const roadmapFilter = productRequests
  //   .filter((item) => item.status !== "suggestion")
  //   .map((item) => item.status);

  // const roadmapStatuses = [...new Set([...roadmapFilter])];

  // count each status
  // find length of new array for no of unique vals, get each value, search for each value in the full version

  // const countOccurances = (status) => {
  //   return roadmapFilter.filter((item) => item === status).length;
  // };

  // const array = ["item 1"];
  // const count = () => {
  //   for (let i = 0; i < roadmapStatuses.length; i++) {
  //     console.log("me", roadmapStatuses[i]);
  //     return array.push(countOccurances(roadmapStatuses[i]));
  //   }
  // };
  // count();

  // console.log(roadmapStatuses);
  // console.log(array);

  // const statusOverview = statuses.map((status, i) => {
  //   return (
  //     <FlexWrapper key={i}>
  //       <Circle />
  //       <Body2>{status}</Body2>
  //       <InnerMargin>
  //         <Body1 style={{ fontWeight: 700 }}>{occuranceCount}</Body1>
  //       </InnerMargin>
  //     </FlexWrapper>
  //   );
  // });

  return (
    <>
      <FlexWrapper>
        <h2>Roadmap</h2>
        <Body3>View</Body3>
      </FlexWrapper>
      <Spacer />
      {/* {statusOverview} */}
    </>
  );
}

export default Roadmap;

const FlexWrapper = styled.div`
  display: flex;
  gap: 0.5rem;
  justify-content: space-between;
  align-items: center;
  text-transform: capitalize;
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
