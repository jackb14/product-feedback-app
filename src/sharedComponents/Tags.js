import Tag from "./Tag";
import styled from "styled-components";

function Tags({ categories }) {
  // generate tags here based on input

  const tagMap = categories.map((category, i) => (
    <Tag key={i} category={category} />
  ));

  return (
    <>
      <StyledWrapper>
        <Tag category="All" />
        {tagMap}
      </StyledWrapper>
    </>
  );
}

export default Tags;

const StyledWrapper = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
`;
