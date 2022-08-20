import { Link } from "react-router-dom";
import styled from "styled-components";
import { Body1, Body2, CUSTOM_STYLES } from "../../../GlobalStyles";

function Roadmap({ productRequests }) {
  // filter out suggestions and return statuses
  const roadmapFilter = productRequests
    .filter((item) => item.status !== "suggestion")
    .map((item) => item.status);

  // create array with unique statuses only
  const roadmapStatuses = [...new Set([...roadmapFilter])];

  // get occurances of an item's status
  const countOccurances = (status) => {
    return roadmapFilter.filter((item) => item === status).length;
  };

  const statuses = [
    {
      status: roadmapStatuses[0],
      color: CUSTOM_STYLES.COLORS.lightOrange,
    },
    {
      status: roadmapStatuses[1],
      color: CUSTOM_STYLES.COLORS.purple,
    },
    {
      status: roadmapStatuses[2],
      color: CUSTOM_STYLES.COLORS.royalBlue,
    },
  ];

  const statusOverview = statuses.map((item, i) => {
    return (
      <FlexWrapper key={i}>
        <StyledCircle color={item.color} />
        <Body2>{item.status}</Body2>
        <InnerMargin>
          <Body1 style={{ fontWeight: 700 }}>
            {countOccurances(item.status)}
          </Body1>
        </InnerMargin>
      </FlexWrapper>
    );
  });

  return (
    <>
      <FlexWrapper>
        <h2>Roadmap</h2>
        <Link to="/roadmap">
          <ViewLink>View</ViewLink>
        </Link>
      </FlexWrapper>
      <Spacer />
      {statusOverview}
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

const InnerMargin = styled.div`
  margin-left: auto;
`;

const StyledCircle = styled.div`
  height: 8px;
  width: 8px;
  background-color: ${(props) => props.color};
  border-radius: 50%;
`;

const Spacer = styled.div`
  height: 10px;
`;

const ViewLink = styled.p`
  font-size: 13px;
  line-height: 19px;
  font-weight: 600;
  color: ${CUSTOM_STYLES.COLORS.royalBlue};
  text-decoration: underline;
`;
