import { Formik, ErrorMessage, Field, Form } from 'formik';
import * as Yup from 'yup';
import {
  StyledForm,
  StyledIcon,
  StyledField,
  StyledLabel,
  AddBtn,
  IconsWrapper,
  StyledWrapper,
  StyledInput,
  StyledTitle,
  ButtonInnerWrapper,
  StyledBtnText,
  StyledPlus,
  StyledSmallTitle,
  StyledImgLabel,
} from '../ModalNewBoard/ModalNewBoard.styled';

import backgroundImage from './images/Vector1.jpg';

export const BackgroundImage = () => {
  return (
    <div>
      <img src={backgroundImage} alt="" />
    </div>
  );
};

const formSquema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  number: Yup.number().required('Required'),
});

export default function ModalNewBoard() {
  return (
    <StyledWrapper>
      <StyledTitle>New board</StyledTitle>

      <Formik
        initialValues={{ name: '', number: '' }}
        validationSchema={formSquema}
        // onSubmit={handleSubmit}
      >
        <StyledForm>
          <label>
            {' '}
            <StyledInput title="title" placeholder="Title" />
            <ErrorMessage name="title" />
          </label>
          <StyledSmallTitle>Icons</StyledSmallTitle>
          <div id="my-radio-group">
            <IconsWrapper role="group" aria-labelledby="my-radio-group">
              <StyledLabel>
                <StyledIcon>
                  width="18" height="18" fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path d="M2.473 3.925a1.95 1.95 0 0 1 1.452-1.452 4.158 4.158 0 0 1 1.9 0 1.95 1.95 0 0 1 1.452 1.452 4.158 4.158 0 0 1 0 1.9 1.95 1.95 0 0 1-1.452 1.452 4.158 4.158 0 0 1-1.9 0 1.95 1.95 0 0 1-1.452-1.452 4.158 4.158 0 0 1 0-1.9ZM2.473 12.175a1.95 1.95 0 0 1 1.452-1.452 4.156 4.156 0 0 1 1.9 0 1.95 1.95 0 0 1 1.452 1.452 4.159 4.159 0 0 1 0 1.9 1.95 1.95 0 0 1-1.452 1.452 4.156 4.156 0 0 1-1.9 0 1.95 1.95 0 0 1-1.452-1.452 4.159 4.159 0 0 1 0-1.9ZM10.723 3.925a1.95 1.95 0 0 1 1.452-1.452 4.159 4.159 0 0 1 1.9 0 1.95 1.95 0 0 1 1.452 1.452 4.156 4.156 0 0 1 0 1.9 1.95 1.95 0 0 1-1.452 1.452 4.159 4.159 0 0 1-1.9 0 1.95 1.95 0 0 1-1.452-1.452 4.156 4.156 0 0 1 0-1.9ZM10.723 12.175a1.949 1.949 0 0 1 1.452-1.452 4.157 4.157 0 0 1 1.9 0c.72.169 1.283.732 1.452 1.452a4.157 4.157 0 0 1 0 1.9 1.949 1.949 0 0 1-1.452 1.452 4.157 4.157 0 0 1-1.9 0 1.949 1.949 0 0 1-1.452-1.452 4.157 4.157 0 0 1 0-1.9Z" />
                </StyledIcon>
                <StyledField type="radio" name="icon" value="One" />
              </StyledLabel>
              <StyledLabel>
                <StyledIcon>
                  width="18" height="18" fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <g clip-path="url(#a)">
                    <path
                      d="m9 1.5 1.509 3.923c.211.55.317.825.482 1.056.145.205.325.385.53.53.23.165.506.27 1.056.482L16.5 9l-3.923 1.509c-.55.211-.825.317-1.056.482a2.247 2.247 0 0 0-.53.53c-.165.23-.27.506-.482 1.056L9 16.5l-1.509-3.923c-.211-.55-.317-.825-.482-1.056a2.248 2.248 0 0 0-.53-.53c-.23-.165-.506-.27-1.056-.482L1.5 9l3.923-1.509c.55-.211.825-.317 1.056-.482a2.25 2.25 0 0 0 .53-.53c.165-.23.27-.506.482-1.056L9 1.5Z"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </g>
                  <defs>
                    <clipPath id="a">
                      <path fill="#fff" d="M0 0h18v18H0z" />
                    </clipPath>
                  </defs>
                </StyledIcon>
                <StyledField type="radio" name="icon" value="One" />
              </StyledLabel>
              <StyledLabel>
                <StyledIcon>
                  width="18" height="18" fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <g clip-path="url(#a)">
                    <path
                      d="M2.505 12.75a3.58 3.58 0 0 1 1.093-4.755l.002-.002a3.583 3.583 0 0 1 4.113.071l2.574 1.872a3.583 3.583 0 0 0 4.113.07l.002-.001a3.578 3.578 0 0 0 1.093-4.755m-2.743 10.245A3.58 3.58 0 0 1 7.997 14.4l-.002-.002a3.583 3.583 0 0 1 .07-4.113l1.872-2.574a3.583 3.583 0 0 0 .071-4.113l-.003-.001A3.58 3.58 0 0 0 5.25 2.505m9.053 1.192a7.5 7.5 0 0 1 0 10.606 7.5 7.5 0 0 1-10.606 0 7.5 7.5 0 0 1 0-10.606 7.5 7.5 0 0 1 10.606 0Z"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </g>
                  <defs>
                    <clipPath id="a">
                      <path fill="#fff" d="M0 0h18v18H0z" />
                    </clipPath>
                  </defs>
                </StyledIcon>

                <StyledField type="radio" name="icon" value="One" />
              </StyledLabel>
              <StyledLabel>
                <StyledIcon>
                  <svg
                    width="18"
                    height="18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clip-path="url(#a)">
                      <path
                        d="m9 1.5 2.7 2.7c1.8-4.725 6.825.3 2.1 2.1L16.5 9l-2.7 2.7c-1.8-4.725-6.825.3-2.1 2.1L9 16.5l-2.7-2.7c-1.8 4.725-6.825-.3-2.1-2.1L1.5 9l2.7-2.7C6 11.025 11.025 6 6.3 4.2L9 1.5Z"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </g>
                    <defs>
                      <clipPath id="a">
                        <path fill="#fff" d="M0 0h18v18H0z" />
                      </clipPath>
                    </defs>
                  </svg>
                </StyledIcon>

                <StyledField type="radio" name="icon" value="One" />
              </StyledLabel>
              <StyledLabel>
                <StyledIcon>
                  width="18" height="18" fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M15.375 5.458 9 9m0 0L2.625 5.458M9 9v7.125m6.75-4.081V5.956c0-.257 0-.385-.038-.5a.75.75 0 0 0-.16-.273c-.082-.089-.195-.151-.42-.276l-5.55-3.083c-.212-.118-.318-.178-.43-.2a.75.75 0 0 0-.303 0c-.113.022-.22.082-.432.2l-5.55 3.083c-.224.125-.337.187-.419.276a.75.75 0 0 0-.16.273c-.038.115-.038.243-.038.5v6.088c0 .257 0 .385.038.5a.75.75 0 0 0 .16.273c.082.089.195.151.42.276l5.55 3.083c.212.118.318.177.43.2.1.021.203.021.303 0 .113-.023.22-.082.432-.2l5.55-3.083c.224-.125.337-.187.419-.276a.75.75 0 0 0 .16-.273c.038-.115.038-.243.038-.5Z"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </StyledIcon>

                <StyledField type="radio" name="icon" value="One" />
              </StyledLabel>
              <StyledLabel>
                <StyledIcon>
                  width="18" height="18" fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M10.687 1.5H6.37c-.134 0-.201 0-.26.02a.375.375 0 0 0-.141.087c-.045.044-.075.104-.135.225l-3.15 6.3c-.144.287-.216.431-.199.548a.375.375 0 0 0 .156.252C2.738 9 2.9 9 3.221 9h4.654l-2.25 7.5 9.145-9.484c.308-.32.462-.48.471-.616a.375.375 0 0 0-.132-.311C15.004 6 14.782 6 14.338 6H9l1.687-4.5Z"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </StyledIcon>

                <StyledField type="radio" name="icon" value="One" />
              </StyledLabel>
              <StyledLabel>
                <StyledIcon>
                  width="18" height="18" fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <g clip-path="url(#a)">
                    <path
                      d="M9 15.354a4.5 4.5 0 1 0 4.185-7.697m-8.37 0A4.502 4.502 0 0 0 6 16.5a4.5 4.5 0 0 0 4.185-6.158M13.5 6a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Z"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </g>
                  <defs>
                    <clipPath id="a">
                      <path fill="#fff" d="M0 0h18v18H0z" />
                    </clipPath>
                  </defs>
                </StyledIcon>

                <StyledField type="radio" name="icon" value="One" />
              </StyledLabel>
              <StyledLabel>
                <StyledIcon>
                  width="18" height="18" fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M8.417 1.824c.213-.118.32-.178.432-.2a.75.75 0 0 1 .302 0c.113.022.22.082.432.2l5.55 3.083c.224.125.337.187.419.276a.75.75 0 0 1 .16.273c.038.115.038.243.038.5v6.088c0 .257 0 .385-.038.5a.75.75 0 0 1-.16.273c-.082.089-.195.151-.42.276l-5.55 3.083c-.212.118-.318.177-.43.2a.75.75 0 0 1-.303 0c-.113-.023-.22-.082-.432-.2l-5.55-3.083c-.224-.125-.337-.187-.419-.276a.75.75 0 0 1-.16-.273c-.038-.115-.038-.243-.038-.5V5.956c0-.257 0-.385.038-.5a.75.75 0 0 1 .16-.273c.082-.089.195-.151.42-.276l5.55-3.083Z"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </StyledIcon>

                <StyledField type="radio" name="icon" value="One" />
              </StyledLabel>
            </IconsWrapper>
          </div>
          <StyledSmallTitle>Background</StyledSmallTitle>

          <div id="my-radio-group">
            <IconsWrapper role="group" aria-labelledby="my-radio-group">
              <StyledImgLabel>
                <StyledField type="radio" name="icon" value="First" />
                <BackgroundImage />
              </StyledImgLabel>
            </IconsWrapper>
          </div>

          <AddBtn type="submit">
            <ButtonInnerWrapper>
              <StyledPlus>+</StyledPlus>
              <StyledBtnText>Create</StyledBtnText>
            </ButtonInnerWrapper>
          </AddBtn>
        </StyledForm>
      </Formik>
    </StyledWrapper>
  );
}
