//@ts-nocheck
import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginUser } from '../redux/auth/auth-actions';
import styled from 'styled-components';

export default function LoginPage() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    switch (name) {
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return;
    }
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    dispatch(loginUser.request<object>({ email, password }));
    setEmail('');
    setPassword('');
  };

  return (
    <DivForm>
      <FormStyled onSubmit={handleSubmit} autoComplete="off">
        <LabelStyled>
          Email
          <InputStyled
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
          />
        </LabelStyled>

        <LabelStyled>
          Password
          <InputStyled
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
          />
        </LabelStyled>

        <ButtonStyled type="submit">Log In</ButtonStyled>
      </FormStyled>
    </DivForm>
  );
}

const DivForm = styled.div`
  display: flex;
`;
const FormStyled = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 320px;
  margin: 20px auto;
`;
const LabelStyled = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
  font-size: 14px;
  text-align: center;
`;
const InputStyled = styled.input`
  padding: 10px;
  height: 30px;
  border-radius: 5px;
  &:hover,
  &:focus {
    border-color: blueviolet;
    outline: none;
  }
`;
const ButtonStyled = styled.button`
  margin: 10auto;
  padding: 5 20;
  border: none;
  border-radius: 5px;
  background-color: #e0e4e4;
  cursor: pointer;
  height: 40px;

  &:hover,
  &:focus {
    color: white;
    background-color: grey;
  }
`;
