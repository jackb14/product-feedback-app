import styled from "styled-components";
import { CUSTOM_STYLES } from "../GlobalStyles";

function ShortTextInput({ id, name, setValue, error }) {
  return (
    <StyledInput
      id={id}
      name={name}
      type="text"
      onChange={(e) => setValue(e.target.value)}
      error={error}
    ></StyledInput>
  );
}

export default ShortTextInput;

const StyledInput = styled.input`
  height: 48px;
  border: ${(props) => props.error && "1px solid " + CUSTOM_STYLES.COLORS.red};
`;
