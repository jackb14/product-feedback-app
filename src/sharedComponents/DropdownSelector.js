import { useState } from "react";
import styled from "styled-components";
import downIcon from "../assets/shared/icon-arrow-down.svg";
import upIcon from "../assets/shared/icon-arrow-up.svg";
import tickIcon from "../assets/shared/icon-check.svg";
import { Body1, CUSTOM_STYLES } from "../GlobalStyles";

function DropdownSelector({ options, setValue, type }) {
  const [icon, setIcon] = useState(downIcon);
  const [displayDropdown, setDisplayDropdown] = useState(false);
  const categories = options;
  const [itemSelected, setItemSelected] = useState(categories[0]);

  const availableOptions = categories.map((category, i) => {
    return (
      <DropdownItem
        key={i}
        type={type}
        onClick={(e) => handleItemClick(e.target.innerText)}
      >
        {category}
        {category === itemSelected && <img src={tickIcon} alt="check mark" />}
      </DropdownItem>
    );
  });

  // handle click events
  const handleSelectorClick = () => {
    setDisplayDropdown(!displayDropdown);
    handleArrowOrientation();
  };

  const handleArrowOrientation = () => {
    if (icon === downIcon) {
      setIcon(upIcon);
    } else if (icon === upIcon) {
      setIcon(downIcon);
    }
  };

  const handleItemClick = (value) => {
    setDisplayDropdown(false);
    setItemSelected(value);
    handleArrowOrientation();
    setValue(value);
  };

  return (
    <>
      <StyledWrapper type={type} onClick={handleSelectorClick}>
        <Body1
          style={{
            color: type === "header" ? "white" : CUSTOM_STYLES.COLORS.darkBlue,
          }}
        >
          {itemSelected}
        </Body1>
        <img src={icon} alt="icon" />
      </StyledWrapper>

      <StyledDropdown type={type} displayDropdown={displayDropdown}>
        {availableOptions}
      </StyledDropdown>
    </>
  );
}

export default DropdownSelector;

const StyledWrapper = styled.div`
  font-family: "Jost", arial, sans-serif;
  width: 100%;
  border: none;
  border-radius: 5px;
  padding: ${(props) => (props.type === "header" ? "" : "10px 20px 10px 20px")};
  font-size: 16px;
  background-color: ${(props) =>
    props.type === "header" ? "" : CUSTOM_STYLES.COLORS.blueyWhite};
  display: flex;
  justify-content: ${(props) =>
    props.type === "header" ? "flex-start" : "space-between"};
  gap: ${(props) => (props.type === "header" ? "1rem" : 0)};
  align-items: center;
  cursor: pointer;
`;

const StyledDropdown = styled.div`
  margin-top: 16px;
  background-color: white;
  border-radius: ${CUSTOM_STYLES.OTHER.borderRadius};
  overflow: hidden;
  box-shadow: 5px 6px 19px 4px rgba(0, 0, 0, 0.08);
  -webkit-box-shadow: 5px 6px 19px 4px rgba(0, 0, 0, 0.08);
  -moz-box-shadow: 5px 6px 19px 4px rgba(0, 0, 0, 0.08);
  position: ${(props) => (props.type === "header" ? "absolute" : "")};
  top: ${(props) => (props.type === "header" ? "40px" : "")};
  display: ${(props) => (props.displayDropdown === true ? "block" : "none")};
`;

const DropdownItem = styled.div`
  border-bottom: 1px solid ${CUSTOM_STYLES.COLORS.lightGrey};
  padding: 10px 20px;
  cursor: pointer;
  width: ${(props) => (props.type === "header" ? "240px" : "100%")};
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${CUSTOM_STYLES.COLORS.darkGrey};

  &:hover {
    color: ${CUSTOM_STYLES.COLORS.purple};
  }
`;
