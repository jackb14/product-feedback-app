import styled from "styled-components";
import FormCard from "../../sharedComponents/FormCard";
import icon from "../../assets/shared/icon-new-feedback.svg";
import FormElementIntro from "../../sharedComponents/FormElementIntro";
import ShortTextInput from "../../sharedComponents/ShortTextInput";
import TextAreaInput from "../../sharedComponents/TextAreaInput";
import DropdownSelector from "../../sharedComponents/DropdownSelector";
import PrimaryButton from "../../sharedComponents/PrimaryButton";
import { CUSTOM_STYLES } from "../../GlobalStyles";
import { useState } from "react";
import { Link } from "react-router-dom";

function AddFeedback() {
  const [titleValue, setTitleValue] = useState();
  const [categoryValue, setCategoryValue] = useState();
  const [textAreaValue, setTextAreaValue] = useState();
  const [titleError, setTitleError] = useState(false);
  const [textAreaError, setTextAreaError] = useState(false);

  const handleSubmit = () => {
    if (!titleValue) {
      setTitleError(true);
      setTextAreaError(false);
    } else if (!textAreaValue) {
      setTextAreaError(true);
      setTitleError(false);
    } else {
      setTitleError(false);
      setTextAreaError(false);
    }
  };

  return (
    <StyledWrapper>
      <FormCard title="Create New Feedback" icon={icon}>
        <FormElementIntro
          htmlFor="feedback-title"
          title="Feedback Title"
          description="Add a short, descriptive headline"
        />
        <ShortTextInput
          id="feedback-title"
          name="feedback-title"
          setValue={setTitleValue}
          error={titleError}
        />
        {titleError && <ErrorMessage>Can't be empty</ErrorMessage>}
        <FormElementIntro
          htmlFor="category"
          title="Category"
          description="Choose a category for your feedback"
        />
        <DropdownSelector setValue={setCategoryValue} />
        <FormElementIntro
          title="Feedback Detail"
          description="Include any specific comments on what should be improved, added, etc."
        />
        <TextAreaInput
          id="feedback-detail"
          name="feedback-detail"
          setValue={setTextAreaValue}
          error={textAreaError}
        />
        {textAreaError && <ErrorMessage>Can't be empty</ErrorMessage>}
        <ButtonWrapper>
          <Link to="/">
            <PrimaryButton
              padding="18px 32px"
              color={CUSTOM_STYLES.COLORS.darkGrey}
            >
              Cancel
            </PrimaryButton>
          </Link>
          <div onClick={handleSubmit}>
            <PrimaryButton
              padding="18px 32px"
              color={CUSTOM_STYLES.COLORS.purple}
            >
              Add Feedback
            </PrimaryButton>
          </div>
        </ButtonWrapper>
      </FormCard>
    </StyledWrapper>
  );
}

export default AddFeedback;

const StyledWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 94px;
  gap: 1.8rem;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 1rem;
  margin-top: 2rem;
`;

const ErrorMessage = styled.div`
  color: ${CUSTOM_STYLES.COLORS.red};
  font-size: 15px;
  margin-top: 5px;
`;
