import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { pathToLoginPage } from '../routes/mainRoutes';
import { useDispatch, useSelector } from 'react-redux';
import { registerUser } from '../redux/auth/auth-actions';
import authSelectors from '../redux/auth/auth-selectors';
import FormikInput from '../components/FormikInput';
import styled from 'styled-components';
import { useFormik, FormikProvider, Field } from 'formik';
import { getLoading } from '../redux/todos/todos-selectors';
import * as Yup from 'yup';

const SignUpForm = () => {
  const isRegistered = useSelector(authSelectors.getIsRegistered);
  const isLoading = useSelector(getLoading);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (isRegistered) {
      return navigate(pathToLoginPage);
    }
  }, [isRegistered]);

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
      changepassword: '',
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .min(4, 'Must be 4 characters or more')
        .required('Required'),
      email: Yup.string().email('Invalid email address').required('Required'),
      password: Yup.string()
        .min(6, 'Must be 6 characters or more')
        .required('Required'),
      changepassword: Yup.string().when('password', {
        is: (val: string) => (val && val.length > 0 ? true : false),
        then: Yup.string().oneOf(
          [Yup.ref('password')],
          'Both password need to be the same',
        ),
      }),
    }),
    onSubmit: ({ name, password, email }) => {
      dispatch(registerUser.request<object>({ name, password, email }));
    },
  });
  return (
    <FormikProvider value={formik}>
      <Form onSubmit={formik.handleSubmit}>
        <Field
          name="name"
          component={FormikInput}
          placeholder="Enter your name"
        />
        <Field
          name="email"
          type="email"
          component={FormikInput}
          placeholder="Enter email"
        />
        <Field
          name="password"
          type="password"
          component={FormikInput}
          placeholder="Enter password"
        />
        <Field
          name="changepassword"
          type="password"
          component={FormikInput}
          placeholder="Enter passsword again"
        />

        <Button disabled={isLoading ? true : false} type="submit">
          Sign Up
        </Button>
      </Form>
    </FormikProvider>
  );
};

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 320px;
  margin: 20px auto;
`;
const Button = styled.button`
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

export default SignUpForm;
