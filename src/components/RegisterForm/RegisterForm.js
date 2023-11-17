import { Formik, Form, ErrorMessage } from 'formik';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import * as Yup from 'yup';
import { Input, FormLabel, Box } from '@chakra-ui/react';
import { RegBtn } from './RegisterForm.styled';



const initialValues = { username: '', email: '', password: '' };
const schema = Yup.object().shape({
  username: Yup.string(),
  email: Yup.string().email(),
  password: Yup.string().min(7, 'Too short password!'),
});

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, { resetForm }) => {
    console.log(values)
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
    <Box >
      <Formik
        initialValues={initialValues}
        validationSchema={schema}
        onSubmit={handleSubmit}
      >
        <Form  autoComplete="off">
          <FormLabel  htmlFor="username">
            Username
            <Input
              
              type="text"
              name="username"
              required
            />
            <span >
              <ErrorMessage name="username" />
            </span>
          </FormLabel>
          <FormLabel htmlFor="email">
            Email
            <Input
                            type="email"
              name="email"
              required
            />
            <span >
              <ErrorMessage name="email" />
            </span>
          </FormLabel>
          <FormLabel  htmlFor="password">
            Password
            <Input
                           type="password"
              name="password"
              required
            />
            <span >
              <ErrorMessage name="password" />
            </span>
          </FormLabel>
          <RegBtn  type="submit">
            Register
          </RegBtn>
        </Form>
      </Formik>
    </Box>
  );
};