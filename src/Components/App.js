import React from "react";
import UserContactForm from "../Forms/UserContactForm";
import { Global, css } from "@emotion/core";
import styled from "@emotion/styled";

const globalStyles = css`
  body {
    background-color: #f5f5f1;
    color: #656565;
    font-family: sans-serif;
    padding: 25px;
  }
`;

// example of styled component
// https://emotion.sh/docs/styled
const FormHeader = styled.h1`
  color: #ff69b4;
  text-align: center;
`;

const App = () => (
  <React.Fragment>
    <Global styles={globalStyles} />
    <FormHeader>User Contact Form</FormHeader>
    <UserContactForm />
  </React.Fragment>
);

export default App;
