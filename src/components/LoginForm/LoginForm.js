import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import { Input, FormLabel } from '@chakra-ui/react';
import { LoginBtn, Form } from './LoginForm.styled';


export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <Form  onSubmit={handleSubmit} autoComplete="off">
      <FormLabel >
        Email
        <Input type="email" name="email" />
      </FormLabel>
      <FormLabel >
        Password
        <Input type="password" name="password" />
      </FormLabel>
      <LoginBtn type="submit">Log In</LoginBtn>
    </Form>
  );
};
