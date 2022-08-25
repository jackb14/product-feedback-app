import styled from "styled-components";
import leftArrow from "../../src/assets/shared/icon-arrow-left.svg";
import { CUSTOM_STYLES } from "../GlobalStyles";
import { useNavigate } from "react-router-dom";

function GoBack(color) {
  const selectedColor = color.color; // handle prop for conditional styling
  const navigate = useNavigate();

  return (
    <>
      <LinkWrapper>
        <ImageWrapper src={leftArrow} alt="left arrow" />
        <TextWrapper onClick={() => navigate(-1)} selectedColor={selectedColor}>
          Go Back
        </TextWrapper>
      </LinkWrapper>
    </>
  );
}

export default GoBack;

const ImageWrapper = styled.img`
  height: 12px;
  width: 12px;
`;

const LinkWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 0.5rem;
  @media (max-width: 768px) {
    width: 90%;
    margin: auto;
  }
`;

const TextWrapper = styled.p`
  color: ${(props) =>
    props.selectedColor === "dark" ? CUSTOM_STYLES.COLORS.darkGrey : "white"};
  font-size: 13px;
  line-height: 19px;
  font-weight: 600;

  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }
`;
