import { useState } from "react";
import styled from "styled-components";
import { Body1, CUSTOM_STYLES } from "../../../GlobalStyles";
import PrimaryButton from "../../../sharedComponents/PrimaryButton";
import TextAreaInput from "../../../sharedComponents/TextAreaInput";

function CommentBox() {
  const [textAreaValue, settextAreaValue] = useState("");
  const [textAreaError, setTextAreaError] = useState(false);

  const handleSubmit = () => {
    if (!textAreaValue) {
      setTextAreaError(true);
    } else {
      setTextAreaError(false);
    }
  };

  return (
    <>
      <StyledWrapper>
        <h2 style={{ marginBottom: "24px" }}>Add comment</h2>
        <TextAreaInput
          id="comment"
          name="comment"
          setValue={settextAreaValue}
          error={textAreaError}
          placeholder="Type your comment here"
        />
        {textAreaError && <ErrorMessage>Can't be empty</ErrorMessage>}
        <CardFooterWrapper>
          <Body1>{250 - textAreaValue.length} Characters Left</Body1>
          <div onClick={handleSubmit}>
            <PrimaryButton
              padding="18px 32px"
              color={CUSTOM_STYLES.COLORS.purple}
            >
              Post Comment
            </PrimaryButton>
          </div>
        </CardFooterWrapper>
      </StyledWrapper>
    </>
  );
}

export default CommentBox;

const StyledWrapper = styled.div`
  background-color: white;
  border-radius: ${CUSTOM_STYLES.OTHER.borderRadius};
  padding: 24px 34px;
`;

const CardFooterWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 16px;
  @media (max-width: 768px) {
    flex-direction: column-reverse;
    gap: 1rem;
  }
`;

const ErrorMessage = styled.div`
  color: ${CUSTOM_STYLES.COLORS.red};
  font-size: 15px;
  margin-top: 5px;
`;
