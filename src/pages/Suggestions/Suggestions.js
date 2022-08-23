import styled from "styled-components";
import MainContent from "./components/MainContent";
import SideBar from "./components/SideBar";

function Suggestions() {
  return (
    <>
      <StyledWrapper>
        <SideBar />
        <MainContent />
      </StyledWrapper>
    </>
  );
}

export default Suggestions;

const StyledWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 94px;
  max-width: 1110px;
  margin: auto;
  gap: 1.8rem;
  @media (max-width: 768px) {
    flex-direction: column;
    margin: 40px;
  }
`;
