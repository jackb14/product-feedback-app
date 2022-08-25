import { CUSTOM_STYLES } from "../GlobalStyles";
import styled from "styled-components";
import { useContext } from "react";
import { FilteredDataContext } from "../pages/Suggestions/FilteredDataContext";
import { DataContext } from "../DataContext";

function Tag({ category, hover }) {
  const { data } = useContext(DataContext);
  const filteredData = useContext(FilteredDataContext); // can't destructure as context isn't always available

  const handleTagClick = (e) => {
    if (hover) {
      const clickedTag = e.target.innerHTML;
      if (clickedTag !== "All") {
        const newData = data.filter((item) => item.category === clickedTag);
        filteredData.setFilteredData(newData);
      } else {
        filteredData.setFilteredData(data);
      }
    } else {
      return null;
    }
  };

  return (
    <>
      <StyledWrapper hover={hover}>
        <StyledBody onClick={(e) => handleTagClick(e)}>{category}</StyledBody>
      </StyledWrapper>
    </>
  );
}

export default Tag;

const StyledWrapper = styled.button`
  border: none;
  background-color: ${CUSTOM_STYLES.COLORS.blueyWhite};
  border-radius: ${CUSTOM_STYLES.OTHER.borderRadius};
  text-transform: capitalize;
  color: ${CUSTOM_STYLES.COLORS.royalBlue} !important;

  &:hover {
    background-color: ${(props) =>
      props.hover
        ? CUSTOM_STYLES.COLORS.royalBlue
        : CUSTOM_STYLES.COLORS.blueyWhite};
    color: ${(props) => (props.hover ? "white !important" : "none")};
    cursor: ${(props) => (props.hover ? "pointer" : "inherit")};
  }
`;

const StyledBody = styled.p`
  font-size: 13px;
  line-height: 19px;
  font-weight: 600;
  padding: 5px 16px;
`;
