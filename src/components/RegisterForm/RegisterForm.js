import { Formik, ErrorMessage, Form } from 'formik';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import * as Yup from 'yup';
import {
  StyledInput,
  ErrorMessageStyled,
  InputWrapper,
  StyledForm,
  RegBtn,
} from './RegisterForm.styled';

import { Button } from '@mui/material';

const initialValues = { username: '', email: '', password: '' };
const schema = Yup.object().shape({
  username: Yup.string(),
  email: Yup.string().email(),
  password: Yup.string().min(7, 'Too short password!'),
});

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, { resetForm }) => {
    console.log(values);
    dispatch(
      register({
        name: values.username,
        email: values.email,
        password: values.password,
      })
    );
    resetForm();
  };
  return (
    <InputWrapper>
      <Formik
        initialValues={initialValues}
        validationSchema={schema}
        onSubmit={handleSubmit}
      >
        {({ dirty, isValid }) => (
          <StyledForm autoComplete="off">
            <StyledInput type="text" name="username" placeholder="Username" />
            <ErrorMessageStyled name="username" component="div" />
            <StyledInput type="email" name="email" placeholder="Email" />
            <ErrorMessageStyled name="email" component="div" />
            <StyledInput
              type="password"
              name="password"
              placeholder="Password"
            />
            <ErrorMessageStyled name="password" component="div" />
            <RegBtn type="submit" variant="contained" color="primary">
              Register
            </RegBtn>
          </StyledForm>
        )}
      </Formik>
    </InputWrapper>
  );
};
