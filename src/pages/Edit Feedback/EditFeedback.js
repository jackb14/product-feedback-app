import { CUSTOM_STYLES } from "../../GlobalStyles";
import styled from "styled-components";
import { DataContext } from "../../DataContext";
import { Link, useParams } from "react-router-dom";
import { useContext, useState } from "react";
import PrimaryButton from "../../sharedComponents/PrimaryButton";
import FormCard from "../../sharedComponents/FormCard";
import FormElementIntro from "../../sharedComponents/FormElementIntro";
import ShortTextInput from "../../sharedComponents/ShortTextInput";
import DropdownSelector from "../../sharedComponents/DropdownSelector";
import TextAreaInput from "../../sharedComponents/TextAreaInput";
import icon from "../../assets/shared/icon-new-feedback.svg";

function EditFeedback() {
  const { id } = useParams();
  const { data } = useContext(DataContext);
  const [titleValue, setTitleValue] = useState();
  const [categoryValue, setCategoryValue] = useState();
  const [statusValue, setStatusValue] = useState();
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

  const postDetails = data.filter((item) => item.id === Number(id));
  const { title } = postDetails[0];

  return (
    <StyledWrapper>
      <FormCard title={`Editing '${title}'`} icon={icon}>
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
        <DropdownSelector
          setValue={setCategoryValue}
          categoryValue={categoryValue}
          options={["Feature", "UI", "UX", "Enhancement", "Bug"]}
        />
        <FormElementIntro
          htmlFor="status"
          title="Status"
          description="Change feature state"
        />
        <DropdownSelector
          setValue={setStatusValue}
          statusValue={statusValue}
          options={["Suggestion", "Planned", "In Progress", "Live"]}
        />
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
          <PrimaryButton padding="18px 32px" color={CUSTOM_STYLES.COLORS.red}>
            Delete
          </PrimaryButton>
          <StyledRightWrapper>
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
                Save Changes
              </PrimaryButton>
            </div>
          </StyledRightWrapper>
        </ButtonWrapper>
      </FormCard>
    </StyledWrapper>
  );
}

export default EditFeedback;

const StyledWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 94px;
  gap: 1.8rem;
  max-width: 1110px;
  margin: auto;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  margin-top: 2rem;

  @media (max-width: 768px) {
    flex-direction: column-reverse;
  }
`;

const ErrorMessage = styled.div`
  color: ${CUSTOM_STYLES.COLORS.red};
  font-size: 15px;
  margin-top: 5px;
`;

const StyledRightWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 1rem;
  @media (max-width: 768px) {
    flex-direction: column-reverse;
  }
`;
