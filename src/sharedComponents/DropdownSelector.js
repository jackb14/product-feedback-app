import { useState } from "react";
import styled from "styled-components";
import downIcon from "../assets/shared/icon-arrow-down.svg";
import upIcon from "../assets/shared/icon-arrow-up.svg";
import tickIcon from "../assets/shared/icon-check.svg";
import { Body1, CUSTOM_STYLES } from "../GlobalStyles";

function DropdownSelector({ setValue }) {
  const [icon, setIcon] = useState(downIcon);
  const [displayDropdown, setDisplayDropdown] = useState(false);
  const categories = ["Feature", "UI", "UX", "Enhancement", "Bug"];
  const [itemSelected, setItemSelected] = useState(categories[0]);

  const availableOptions = categories.map((category, i) => {
    return (
      <DropdownItem
        key={i}
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
      <StyledWrapper onClick={handleSelectorClick}>
        <Body1 style={{ color: CUSTOM_STYLES.COLORS.darkBlue }}>
          {itemSelected}
        </Body1>
        <img src={icon} alt="icon" />
      </StyledWrapper>

      <StyledDropdown displayDropdown={displayDropdown}>
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
  padding: 10px 20px 10px 20px;
  font-size: 16px;
  background-color: ${CUSTOM_STYLES.COLORS.blueyWhite};
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
`;

const StyledDropdown = styled.div`
  margin-top: 16px;
  background-color: white;
  border-radius: ${CUSTOM_STYLES.OTHER.borderRadius};
  overflow: hidden;
  padding: 0 20px;
  box-shadow: 5px 6px 19px 4px rgba(0, 0, 0, 0.08);
  -webkit-box-shadow: 5px 6px 19px 4px rgba(0, 0, 0, 0.08);
  -moz-box-shadow: 5px 6px 19px 4px rgba(0, 0, 0, 0.08);
  display: ${(props) => (props.displayDropdown === true ? "block" : "none")};
`;

const DropdownItem = styled.div`
  border-bottom: 1px solid ${CUSTOM_STYLES.COLORS.lightGrey};
  padding: 10px 0;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;

  &:hover {
    color: ${CUSTOM_STYLES.COLORS.purple};
  }
`;
