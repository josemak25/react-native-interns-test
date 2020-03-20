import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  justify-content: space-around;
  align-items: center;
  /* background: black; */
  background: #f5f8fc;
`;

export const AppLogo = styled.Image`
  height: 70px;
  width: 40%;
`;

export const SignUpButton = styled.View`
  justify-content: center;
  height: 60px;
  width: 300px;
  background: #69ac80;
  border-radius: 4px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
`;

export const LoginButton = styled.View`
  justify-content: center;
  height: 60px;
  width: 300px;
  background: #ffffff;
  margin-top: 10px;
  border-radius: 4px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
`;

export const Buttons = styled.View`
  /* justify-content: center; */
`;

export const SignUpText = styled.Text`
  text-align: center;
  color: #e9f3ed;
  text-transform: uppercase;
`;

export const LoginText = styled.Text`
  text-align: center;
  color: #69ac80;
`;

export const FormContainer = styled.View`
  width: 90%;
`;

export const FormInputs = styled.View`
  background: #ffffff;
  height: 320px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
  border-radius: 30px;
  justify-content: space-around;
`;

export const InputItem = styled.View`
  flex-direction: row;
  padding-left: 20px;
`;

export const Inputs = styled.TextInput`
  width: 80%;
  margin-left: 10px;
`;

export const UsernameLogo = styled.Image``;

export const PasswordLogo = styled.Image``;

export const FormAddOns = styled.View`
  align-items: center;
  justify-content: space-between;
  width: 90%;
`;

export const PrivacyText1 = styled.Text`
  font-size: 15px;
`;
export const PrivacyText2 = styled.Text`
  margin-top: 15px;
  font-size: 12px;
  color: #69ac80;
`;
