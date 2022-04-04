import React from 'react';
import styled from 'styled-components';
import { FieldProps } from 'formik';

const FormikInput = ({
  field,
  form: { touched, errors },
  ...props
}: FieldProps) => {
  return (
    <>
      <Input {...field} {...props} />

      {touched[field.name] && errors[field.name] && (
        <DivError className="error">{errors[field.name]}</DivError>
      )}
    </>
  );
};

const Input = styled.input`
  padding: 10px;
  width: 300px;
  margin: 10px;
  height: 30px;
  border-radius: 5px;
  &:hover,
  &:focus {
    border-color: blueviolet;
    outline: none;
  }
`;
const DivError = styled.div`
  margin: 10px;
`;

export default FormikInput;
