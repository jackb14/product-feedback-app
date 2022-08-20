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
  gap: 1.8rem;
`;
