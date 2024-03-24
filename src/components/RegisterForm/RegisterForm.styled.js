import styled from 'styled-components';
import { Field, Form, ErrorMessage } from 'formik';
import { Button } from '@mui/material';

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 30px;

  @media (min-width: 1440px) {
    width: 450px;
    margin: 0 auto;
    margin-top: 45px;
  }
`;

export const StyledInput = styled(Field)`
  width: 300px;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-sizing: border-box;

  @media (min-width: 1440px) {
    width: 450px;
  }
`;

export const ErrorMessageStyled = styled(ErrorMessage)`
  color: red;
`;

export const StyledForm = styled(Form)`
  width: 300px;
  margin: 0 auto;

  @media (min-width: 1440px) {
    width: 450px;
    margin: 0 auto;
  }
`;

export const RegBtn = styled(Button)`
  display: block;
  margin: 10px auto;
  background-color: #1976d2;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;

  &:hover {
    background-color: #0d47a1;
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(25, 118, 210, 0.5);
  }
`;
