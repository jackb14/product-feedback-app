import Tag from "./Tag";
import styled from "styled-components";

function Tags() {
  // generate tags here based on input

  return (
    <>
      <StyledWrapper>
        <Tag category="test" />
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
