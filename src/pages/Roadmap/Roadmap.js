import styled from "styled-components";
import Header from "../../sharedComponents/Header";
import Kanban from "./components/Kanban";
import leftArrow from "../../assets/shared/icon-arrow-left.svg";
import { Link } from "react-router-dom";

function Roadmap() {
  return (
    <>
      <StyledWrapper>
        <Header>
          <HeaderWrapper>
            <LinkWrapper>
              <ImageWrapper src={leftArrow} alt="left arrow" />
              <Link to="/">
                <TextWrapper>Go Back</TextWrapper>
              </Link>
            </LinkWrapper>
            <h2 style={{ color: "white" }}>Roadmap</h2>
          </HeaderWrapper>
        </Header>
        <Kanban />
      </StyledWrapper>
    </>
  );
}

export default Roadmap;

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-top: 94px;
  gap: 1.8rem;
`;

const LinkWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 0.5rem;
`;

const TextWrapper = styled.p`
  color: white;
  font-size: 13px;
  line-height: 19px;
  font-weight: 600;

  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }
`;

const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;

const ImageWrapper = styled.img`
  height: 12px;
  width: 12px;
`;
