import React from 'react';
import styled from "@emotion/styled";

const Alert = styled.div`
  background-color: #f3f3f3;
  border: 1px solid #ccc;
  border-radius: 3px;
  font-size: 14px;
  margin-top: 5px;
  padding: 10px;
  &.alert-danger{
    background-color: #f8d7da;
    border-color: #f5c6cb;
    color: #721c24;
  }
`;

const AlertBox = ({ children, type }) => {
    return <Alert className={'alert alert-' + type}>{children}</Alert>;
}
 
export default AlertBox;