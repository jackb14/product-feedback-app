import { createGlobalStyle } from "styled-components";
import styled from "styled-components";

export const GlobalStyles = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  html {
    font-size: 1.125rem;
  }
  body {
    background-color: #E3E7FA;
    font-family: 'Jost', arial, sans-serif;
  }
  h1, h2, h3, h4 {
    font-weight: 700;
    color: #3A4374;
  }
  h1 {
    line-height: 35px;
    font-size: 24px;
  }
  h2 {
    /* line-height: 29px; */
    font-size: 20px;
  }
  h3 {
    line-height: 26px;
    font-size: 18px;
  }
  h4 {
    line-height: 20px;
    font-size: 14px;
  }
`;

export const CUSTOM_STYLES = {
  COLORS: {
    purple: "#AD1FEA",
    royalBlue: "#4661E6",
    darkestBlue: "#4661E6",
    blueyWhite: "#E3E7FA",
    lightGrey: "#F7F8FD",
    darkBlue: "#3A4374",
    darkGrey: "#647196",
    lightOrange: "#F49F85",
    lightBlue: "#62BCFA",
  },
  OTHER: {
    borderRadius: "10px",
  },
};

export const Body1 = styled.p`
  font-size: 16px;
  line-height: 23px;
  font-weight: 400;
  color: #647196;
`;

export const Body2 = styled.p`
  font-size: 15px;
  line-height: 22px;
  font-weight: 400;
  color: #647196;
`;

export const Body3 = styled.p`
  font-size: 13px;
  line-height: 19px;
  font-weight: 600;
  color: #647196;
`;
