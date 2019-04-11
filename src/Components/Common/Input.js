import React from "react";
import AlertBox from './AlertBox';
import styled from "@emotion/styled";

const Label = styled.label`
  display: block;
  font-size: 14px;
  margin-bottom: 5px;
  width: 100%;
`;

const InputField = styled.input`
  border: 1px solid #f1f1f1;
  border-radius: 3px;
  display: block;
  font-size: 14px;
  outline: none;
  padding: 10px;
  width: 100%;
  &:focus{ border-color: ccc; }
`;

const FormGroup = styled.div`
  margin-bottom: 20px;
`;

const Input = ({ value, label, name, onChange, onBlur, error, type = "text" }) => {
  return (
    <FormGroup className="form-group">
      <Label htmlFor={name}>{label}</Label>
      <InputField
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        id={name}
      />
      {error && <AlertBox type='danger'>{error}</AlertBox>}
    </FormGroup>
  );
};

export default Input;
