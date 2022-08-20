import styled from "styled-components";
import KanbanColumn from "./KanbanColumn";
import { DataContext } from "../../../DataContext";
import { useContext } from "react";

function Kanban() {
  const data = useContext(DataContext);
  const { productRequests } = data.data;

  return (
    <>
      <FlexWrapper>
        <KanbanColumn status="planned" data={productRequests} />
        <KanbanColumn status="in-progress" data={productRequests} />
        <KanbanColumn status="live" data={productRequests} />
      </FlexWrapper>
    </>
  );
}

export default Kanban;

const FlexWrapper = styled.div`
  display: flex;
  gap: 2rem;
`;
