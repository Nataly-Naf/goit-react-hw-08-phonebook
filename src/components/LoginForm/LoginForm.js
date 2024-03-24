import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import {
  StyledForm,
  StyledInput,
  StyledButton,
  StyledLabel,
  ErrorMessageStyled,
  InputWrapper,
} from './LoginForm.styled';
import { Formik } from 'formik';
import * as Yup from 'yup';

const schema = Yup.object().shape({
  email: Yup.string().email(),
  password: Yup.string().min(7, 'Too short password!'),
});

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, { resetForm }) => {
    dispatch(logIn(values));
    resetForm();
  };

  return (
    <InputWrapper>
      <Formik
        initialValues={{ email: '', password: '' }}
        onSubmit={handleSubmit}
        validationSchema={schema}
      >
        {({ handleSubmit }) => (
          <StyledForm onSubmit={handleSubmit} autoComplete="off">
            <StyledInput type="email" name="email" placeholder="Email" />
            <ErrorMessageStyled name="email" component="div" />
            <StyledInput
              type="password"
              name="password"
              placeholder="Password"
            />
            <ErrorMessageStyled name="password" component="div" />
            <StyledButton type="submit" variant="contained" color="primary">
              Log In
            </StyledButton>
          </StyledForm>
        )}
      </Formik>
    </InputWrapper>
  );
};
