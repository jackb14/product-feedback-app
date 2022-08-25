import Tag from "./Tag";
import styled from "styled-components";

function Tags({ categories, hover }) {
  // generate tags here based on input

  const tagMap = categories.map((category, i) => (
    <Tag key={i} category={category} hover={hover} />
  ));

  return (
    <>
      <StyledWrapper>
        <Tag category="All" hover={hover} />
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
