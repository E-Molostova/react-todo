import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { pathToTodos } from '../routes/mainRoutes';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../redux/auth/auth-actions';
import authSelectors from '../redux/auth/auth-selectors';
import FormikInput from '../components/FormikInput';
import { useFormik, Field, FormikProvider } from 'formik';
import { OpenedEye } from '../components/SvgComponents';
import Credentials from '../interfaces/Credentials';
import * as Yup from 'yup';
import styled from 'styled-components';

const LoginForm = () => {
  const [showHidePassword, changeShowHidePassword] = useState(false);
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (isLoggedIn) {
      return navigate(pathToTodos);
    }
  }, [isLoggedIn]);

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      email: Yup.string().email('Invalid email address').required('Required'),
      password: Yup.string()
        .min(6, 'Must be 6 characters or more')
        .required('Required'),
    }),

    onSubmit: values => {
      dispatch(loginUser.request<Credentials>(values));
    },
  });

  const handleModePassword = () => {
    changeShowHidePassword(!showHidePassword);
  };

  return (
    <FormikProvider value={formik}>
      <Form onSubmit={formik.handleSubmit}>
        <Field
          name="email"
          type="email"
          component={FormikInput}
          placeholder="Enter email"
        />
        <DivPassword>
          <Field
            type={showHidePassword ? 'text' : 'password'}
            name="password"
            component={FormikInput}
            placeholder="Enter password"
          />
          <DivEye>
            <OpenedEye onClick={handleModePassword} />
          </DivEye>
        </DivPassword>

        <Button type="submit">Log In</Button>
      </Form>
    </FormikProvider>
  );
};

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 320px;
  margin: 10px auto;
`;
const Button = styled.button`
  margin: 10auto;
  padding: 5px 20px;
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
const DivPassword = styled.div`
  position: relative;
`;

const DivEye = styled.div`
  position: absolute;
  top: 13px;
  right: 20px;
`;

export default LoginForm;
