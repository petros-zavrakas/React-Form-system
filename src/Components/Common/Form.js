// reusable form component goes here
// should be generic, with no code related to one specific type of form
// see the REUSABLE COMPONENT section for details

import React, { Component } from "react";
import FormValidator from "./FormValidator";
import Input from "./Input";
import styled from "@emotion/styled";

const Button = styled.button`
  background-color: #ff69b4;
  border: none;
  border-radius: 3px;
  color: #fff;
  font-size: 16px;
  outline: none;
  padding: 15px 20px;
  width: 100%;
  &:hover{ background-color: #e8539e; }
`

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formFields: {},
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

    if (Object.keys(this.state.errors).length === 0) this.doSubmit();
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

  renderInput(label, name, validations) {
    const { formFields, errors } = this.state;

    return (
      <Input
        value={formFields[name]}
        label={label}
        name={name}
        onChange={this.handleChange}
        onBlur={() => this.validate(name, validations)}
        error={errors[name]}
      />
    );
  }

  renderSubmitButton(label) {
    return (
      <Button type="submit" className="btn btn-default">
        {label}
      </Button>
    );
  }
}

export default Form;
