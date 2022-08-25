import styled from "styled-components";
import KanbanColumn from "./KanbanColumn";
import { DataContext } from "../../../DataContext";
import { useContext } from "react";

function Kanban() {
  const { data } = useContext(DataContext);

  return (
    <>
      <FlexWrapper>
        <KanbanColumn status="planned" data={data} />
        <KanbanColumn status="in-progress" data={data} />
        <KanbanColumn status="live" data={data} />
      </FlexWrapper>
    </>
  );
}

export default Kanban;

const FlexWrapper = styled.div`
  display: flex;
  gap: 2rem;
`;
