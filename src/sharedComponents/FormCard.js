import styled from "styled-components";
import GoBack from "./GoBack";
import { CUSTOM_STYLES } from "../GlobalStyles";

function FormCard({ icon, title, children }) {
  return (
    <>
      <StyledFlex>
        <GoBack color="dark" />
        <StyledFormWrapper>
          <StyledImg src={icon} alt="icon" />
          <StyledHeaderWrapper>
            <h1>{title}</h1>
          </StyledHeaderWrapper>
          {children}
        </StyledFormWrapper>
      </StyledFlex>
    </>
  );
}

export default FormCard;

const StyledFormWrapper = styled.div`
  background-color: white;
  border-radius: ${CUSTOM_STYLES.OTHER.borderRadius};
  width: 600px;
  padding: 52px 42px;
  position: relative;
  @media (max-width: 768px) {
    width: 90%;
    margin: auto;
  }
`;

const StyledFlex = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4rem;
`;

const StyledImg = styled.img`
  position: absolute;
  top: -30px;
`;

const StyledHeaderWrapper = styled.div`
  padding-bottom: 16px;
`;
