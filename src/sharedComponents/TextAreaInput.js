import styled from "styled-components";
import { CUSTOM_STYLES } from "../GlobalStyles";

function TextAreaInput({ id, name, setValue, error, placeholder }) {
  return (
    <StyledInput
      id={id}
      name={name}
      type="text"
      onChange={(e) => setValue(e.target.value)}
      error={error}
      placeholder={placeholder}
    ></StyledInput>
  );
}

export default TextAreaInput;

const StyledInput = styled.textarea`
  height: 96px;
  padding: 16px 24px;
  border: ${(props) => props.error && "1px solid " + CUSTOM_STYLES.COLORS.red};
`;
