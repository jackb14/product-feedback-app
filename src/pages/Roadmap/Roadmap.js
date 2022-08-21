import styled from "styled-components";
import GoBack from "../../sharedComponents/GoBack";
import Header from "../../sharedComponents/Header";
import Kanban from "./components/Kanban";

function Roadmap() {
  return (
    <>
      <StyledWrapper>
        <Header>
          <HeaderWrapper>
            <GoBack />
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
  max-width: 1110px;
  margin: auto;
`;

const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;
