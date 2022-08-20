import styled from "styled-components";
import { CUSTOM_STYLES } from "../../../GlobalStyles";
import KanbanCard from "./KanbanCard";

function KanbanColumn({ status, data }) {
  const statusColor = (status) => {
    if (status === "planned") {
      return CUSTOM_STYLES.COLORS.lightOrange;
    } else if (status === "in-progress") {
      return CUSTOM_STYLES.COLORS.purple;
    } else if (status === "live") {
      return CUSTOM_STYLES.COLORS.lightBlue;
    }
  };

  const kanbanItems = data
    .filter((item) => item.status === status)
    .map((item) => {
      return (
        <KanbanCard
          key={item.id}
          status={item.status}
          color={statusColor(item.status)}
          title={item.title}
          description={item.description}
          category={item.category}
          upvotes={item.upvotes}
          comments={item.comments}
        />
      );
    });

  return (
    <>
      <StyledWrapper>{kanbanItems}</StyledWrapper>
    </>
  );
}

export default KanbanColumn;

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;
