import { Field, Form } from 'formik';
import styled from 'styled-components';
import { BackgroundImage } from './ModalNewBoard';

// // import { primaryFont } from '../fonts';
export const StyledTitle = styled.p`
  font-size: 16px;
  color: #ffffff;
  text-align: left;
  margin-bottom: 24px;
`;
export const StyledSmallTitle = styled.p`
  color: #ffffff;
  font-size: 14px;
  text-align: left;
  margin-bottom: 14px;
`;

export const StyledInput = styled(Field)`
  width: 287px;
  height: 49px;
  padding: 18px;
  font-size: 14px;
  border: solid 1px #bedbb0;
  background-color: #1f1f1f;
  border-radius: 8px;
  margin-bottom: 24px;
`;
export const StyledLabel = styled.label`
  cursor: pointer;
  display: flex;
  align-items: center;
  width: 18px;
  height: 18px;
`;

export const StyledImgLabel = styled.label`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  border-radius: 5px;
  overflow: hidden;
  flex-direction: column;
  text-align: center;
`;

// export const StyledImg = styled(BackgroundImage)`
//   display: flex;
//   width: 100%;
//   height: 100%;
// `;
export const StyledField = styled(Field)`
  appearance: none;
`;

export const IconsWrapper = styled.div`
  display: flex;
  gap: 8px;
  margin-bottom: 24px;
`;

export const StyledIcon = styled.svg`
  width: 100%;
  height: 100%;
  opacity: 0.5;
  stroke: #ffffff;
  stroke-width: 1.5;
  &:active {
    opacity: 1;
  }
`;

export const StyledBackgroundIcon = styled.svg`
  width: 28px;
  height: 28px;
  background-color: white;
  background-image: url('./images/Vector.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

export const AddBtn = styled.button`
  background-color: #bedbb0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 287px;
  height: 49px;
  padding: 0;
  border-radius: 8px;
  border: none;
  outline: solid #000000 1px;

  &:hover {
    background-color: #9dc888;
  }
`;

export const ButtonInnerWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const StyledBtnText = styled.p`
  font-size: 16px;
  color: #161616;
`;

export const StyledPlus = styled.div`
  width: 28px;
  height: 28px;
  background-color: #161616;
  color: white;
  padding: 12px;
  font-size: 16px;
  text-aligh: center;
`;
// export const MainWrapper = styled.div`
//   width: 100%;
//   min-height: 100vh;
//   background-color: ${p => p.theme.colors.mainBgColor};

//   display: flex;
//   align-items: center;
//   justify-content: center;
// `;

// export const MainText = styled.p`
//   color: ${p => p.theme.colors.mainPageTextColor};
//   text-align: center;
//   font-family: ${primaryFont};
//   font-size: 14px;
//   font-style: normal;
//   font-weight: 400;
//   line-height: 1.28;
//   letter-spacing: -0.28px;

//   @media (min-width: 1440px) {
//     max-width: 486px;
//     width: 100%;
//   }
// `;

export const StyledForm = styled(Form)`
  margin: 0;
`;
export const StyledWrapper = styled.div`
  width: 335px;
  height: 433px;
  padding: 24px;
  background-color: black;
`;
