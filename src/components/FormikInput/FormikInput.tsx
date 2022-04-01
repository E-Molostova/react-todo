import React from 'react';
import styled from 'styled-components';

interface Props {
  field: {
    name: string;
  };
  form: {
    touched: any;
    errors: any;
    data: string;
  };
}

const FormikInput = ({
  field,
  form: { touched, errors, data },
  ...props
}: Props) => {
  return (
    <>
      <Input name={data} {...field} {...props} />

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
