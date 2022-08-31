import styled from "styled-components";
import { CUSTOM_STYLES } from "../../../GlobalStyles";
import ColumnHeader from "./ColumnHeader";
import KanbanCard from "./KanbanCard";

function KanbanColumn({ status, data }) {
  // Column header logic
  const description = (status) => {
    if (status === "planned") {
      return "Ideas prioritized for research";
    } else if (status === "in-progress") {
      return "Currently being developed";
    } else if (status === "live") {
      return "Released features";
    }
  };

  // Column body logic
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
          totalComments={item.totalComments}
          totalReplies={item.totalReplies}
        />
      );
    });

  return (
    <>
      <StyledColumnFlex>
        <ColumnHeader
          status={status}
          description={description(status)}
          total={kanbanItems.length}
        />
        <StyledWrapper>{kanbanItems}</StyledWrapper>
      </StyledColumnFlex>
    </>
  );
}

export default KanbanColumn;

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledColumnFlex = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;
