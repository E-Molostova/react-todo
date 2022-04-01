import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../redux/auth/auth-actions';
import authSelectors from '../redux/auth/auth-selectors';
import FormikInput from '../components/FormikInput';
import { useFormik, Field, FormikProvider } from 'formik';
import * as Yup from 'yup';
import styled from 'styled-components';

const LoginForm = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (isLoggedIn) {
      return navigate('/todos');
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
      dispatch(loginUser.request<object>(values));
    },
  });
  return (
    <FormikProvider value={formik}>
      <Form
        onSubmit={formik.handleSubmit}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      >
        <Field
          name="email"
          type="email"
          component={FormikInput}
          placeholder="Enter email"
        />
        <Field
          type="password"
          name="password"
          component={FormikInput}
          placeholder="Enter password"
        />

        <Button type="submit">Log In</Button>
      </Form>
    </FormikProvider>
  );
};

const Form = styled.form`
  display: flex;
  flex-direction: column;
  /* justify-content: baseline; */
  /* align-items: center; */
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

export default LoginForm;
