// code related to a specific form goes here, using the imported generic Form component
// see the SINGLE IMPLEMENTATION section for details
import React, { Component } from "react";
import Form from "../Components/Common/Form";
import styled from "@emotion/styled";

const FormContainer = styled.form`
  background-color: #fff;
  border-radius: 3px;
  margin: 0 auto;
  max-width: 350px;
  padding: 30px;
  width: 100%;
`;

class UserContactForm extends Form {
  constructor(props) {
    super(props);
    this.state = {
      formFields: {
        firstName: "",
        lastName: "",
        areaCode: "",
        phoneNumber: ""
      },
      errors: {}
    };
  }

  doSubmit() {
    console.log(this.state.formFields);
  }

  render() {
    return (
      <FormContainer onSubmit={this.handleSubmit}>
        {this.renderInput("First Name", "firstName", ["isRequired", "isString"])}
        {this.renderInput("Last Name", "lastName", ["isString"])}
        {this.renderInput("Area Code", "areaCode", ["isNumber"])}
        {this.renderInput("Phone Number", "phoneNumber", ["isRequired", "isNumber"])}
        {this.renderSubmitButton("Send Message")}
      </FormContainer>
    );
  }
}

export default UserContactForm;
