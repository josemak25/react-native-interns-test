import styled from 'styled-components/native';

// export const Container = styled.View`
//   flex: 1;
//   justify-content: center;
//   align-items: center;
//   background-color: ${({ theme }) => theme.colors.BD_DARK_COLOR};
// `;

// export const Welcome = styled.Text`
//   font-size: ${({ theme }) => theme.fonts.LARGE_SIZE}px;
//   font-family: ${({ theme }) => theme.fonts.IBM_SANS_BOLD};
//   color: ${({ theme }) => theme.colors.FONT_DARK_COLOR};
//   text-transform: capitalize;
// `;

// STARTING IMAGE
export const StartText = styled.Text`
  font-size: 24px;
  margin-top: 20px;
  text-transform: capitalize;
`;

export const BodyText = styled.Text`
  font-size: 17px;
  width: 300px;
  text-align: center;
  color: #838587;
  margin-bottom: 70px;
  text-transform: capitalize;
`;

export const StartImage = styled.Image`
  margin-bottom: -20px;
`;

export const Container2 = styled.View`
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;

// INDEX

export const GetStartedContainer = styled.View`
  flex: 1;
  align-items: center;
`;

export const GetStartedButton = styled.View`
  justify-content: center;
  height: 60px;
  width: 300px;
  background: #69ac80;
  border-radius: 4px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
`;

export const LogInButton = styled.View`
  justify-content: center;
  height: 60px;
  width: 300px;
  background: #ffffff;
  margin-top: 20px;
  border-radius: 4px;
  margin-bottom: 20px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
`;

export const GetStartedText = styled.Text`
  text-align: center;
  color: #e9f3ed;
  text-transform: uppercase;
`;

export const LogInText = styled.Text`
  text-align: center;
  color: #69ac80;
`;
