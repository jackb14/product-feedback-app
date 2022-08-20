import styled from "styled-components";
import { Body1 } from "../../../GlobalStyles";
import PrimaryButton from "../../../sharedComponents/PrimaryButton";

function LargeCard({ img, heading, body, btn, link, btnColor }) {
  return (
    <StyledWrapper>
      <img style={{ marginBottom: "52px" }} src={img} alt="icon" />
      <h1>{heading}</h1>
      <BodyWrapper>
        <Body1>{body}</Body1>
      </BodyWrapper>
      <PrimaryButton color={btnColor}>{btn}</PrimaryButton>
    </StyledWrapper>
  );
}

export default LargeCard;

const StyledWrapper = styled.div`
  background-color: white;
  height: 600px;
  width: 100%;
  margin-top: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const BodyWrapper = styled.div`
  width: 50%;
  text-align: center;
  margin-top: 16px;
  margin-bottom: 48px;
`;
