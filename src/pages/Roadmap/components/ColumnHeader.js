import { Body1 } from "../../../GlobalStyles";

function ColumnHeader({ status, description, total }) {
  const checkStatus = (status) => {
    if (status === "in-progress") {
      return "in progress";
    } else {
      return status;
    }
  };

  return (
    <>
      <h3 style={{ textTransform: "capitalize" }}>
        {checkStatus(status)} ({total})
      </h3>
      <Body1>{description}</Body1>
    </>
  );
}

export default ColumnHeader;
