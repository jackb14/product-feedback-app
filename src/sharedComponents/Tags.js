import Tag from "./Tag";
import styled from "styled-components";
import { useState } from "react";

function Tags({ categories, hover }) {
  const [activeTag, setActiveTag] = useState();
  // generate tags here based on input

  return (
    <>
      <StyledWrapper>
        <Tag
          category="All"
          hover={hover}
          active={activeTag === "All"}
          setActive={() => setActiveTag("All")}
        />
        {categories.map((category, i) => (
          <Tag
            key={i}
            category={category}
            hover={hover}
            active={activeTag === category}
            setActive={() => setActiveTag(category)}
          />
        ))}
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
