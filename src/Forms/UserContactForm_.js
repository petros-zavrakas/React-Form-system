// This inludes all the 'Form' logic befor extracting the Form system. 
// I kept this just for presentation reasons

import React, { Component } from "react";
import Form from "../Components/Common/Form";
import Input from "../Components/Common/Input";
import FormValidator from "../Components/Common/FormValidator";

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
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.validate = this.validate.bind(this);
  }

  handleChange({ currentTarget: input }) {
    const formFields = { ...this.state.formFields };
    formFields[input.name] = input.value;
    this.setState({ formFields });
  }

  handleSubmit(event) {
    event.preventDefault();

    const { formFields, errors } = this.state;
    if (Object.keys(errors).length === 0) console.log(formFields);
  }

  validate(field, validations) {
    const value = this.state.formFields[field];

    for (let validation of validations) {
      const { valid, message } = FormValidator[validation](value);

      const errors = { ...this.state.errors };

      if (!valid) errors[field] = message;
      else delete errors[field];

      this.setState({ errors });

      if (!valid) break;
    }
  }

  render() {
    const { formFields, errors } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <Input
          value={formFields.firstName}
          label="First Name"
          name="firstName"
          onChange={this.handleChange}
          onBlur={() => this.validate("firstName", ["isString", "isRequired"])}
          error={errors.firstName}
        />
        <Input
          value={formFields.lastName}
          label="Last Name"
          name="lastName"
          onChange={this.handleChange}
          onBlur={() => this.validate("lastName", ["isString"])}
          error={errors.lastName}
        />
        <Input
          value={formFields.areaCode}
          label="Area Code"
          name="areaCode"
          onChange={this.handleChange}
          onBlur={() => this.validate("areaCode", ["isNumber"])}
          error={errors.areaCode}
        />
        <Input
          value={formFields.phoneNumber}
          label="Phone Number"
          name="phoneNumber"
          onChange={this.handleChange}
          onBlur={() =>
            this.validate("phoneNumber", ["isNumber", "isRequired"])
          }
          error={errors.phoneNumber}
        />
        <button type="submit" className="btn btn-default">
          Submit
        </button>
      </form>
    );
  }
}

export default UserContactForm;
