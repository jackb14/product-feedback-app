import styled from "styled-components";
import { CUSTOM_STYLES } from "../../../GlobalStyles";
import PrimaryButton from "../../../sharedComponents/PrimaryButton";
import TextAreaInput from "../../../sharedComponents/TextAreaInput";

function Reply({ placeholder }) {
  return (
    <StyledWrapper>
      <TextWrapper>
        <TextAreaInput placeholder={placeholder} />
      </TextWrapper>
      <PrimaryButton color={CUSTOM_STYLES.COLORS.purple}>
        Post Reply
      </PrimaryButton>
    </StyledWrapper>
  );
}

export default Reply;

const StyledWrapper = styled.div`
  margin-top: 24px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 1rem;
`;

const TextWrapper = styled.div`
  flex: 1;
  max-width: 450px;
`;
