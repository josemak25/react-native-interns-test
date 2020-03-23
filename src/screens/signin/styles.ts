import { theme } from './../../theme/types';
import styled from 'styled-components/native';
import { Animated } from 'react-native';

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

export const LoginButton = styled.View`
  justify-content: center;
  height: 60px;
  width: 300px;
  background: #69ac80;
  border-radius: 4px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
`;

export const CreateAccountButton = styled.View`
  justify-content: center;
  height: 60px;
  width: 300px;
  background: #ffffff;
  margin-top: 20px;
  border-radius: 4px;
  /* margin-bottom: 20px; */
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
`;

export const Buttons = styled.View`
  /* justify-content: center; */
`;

export const LoginText = styled.Text`
  text-align: center;
  color: #e9f3ed;
  text-transform: uppercase;
`;

export const CreateAccountText = styled.Text`
  text-align: center;
  color: #69ac80;
`;

export const FormContainer = styled.View`
  width: 90%;
`;

export const FormInputs = styled.View`
  background: #ffffff;
  height: 150px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
  border-radius: 30px;
  justify-content: space-around;
`;

export const UsernameItems = styled.View`
  flex-direction: row;
  padding-left: 20px;
`;

export const PasswordItems = styled.View`
  flex-direction: row;
  padding-left: 20px;
`;

export const UsernameInput = styled.TextInput`
  padding-left: 20px;
  width: 80%;
  margin-left: 10px;
`;

export const PasswordInput = styled.TextInput`
  padding-left: 20px;
  width: 80%;
  margin-left: 10px;
`;

export const UsernameLogo = styled.Image``;

export const PasswordLogo = styled.Image``;

export const FormAddOns = styled.View`
  margin-top: 10px;
  margin-left: 15px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 90%;
`;

export const FormCheckBox = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const RememberMeText = styled.Text`
  margin-left: 8px;
`;

const ErrorLog = styled.View`
  width: 100%;
  position: absolute;
  padding: 10px;
  background: rgba(0,0,0,0.8);
  z-index: 1;
  height: 200px;
  align-items: center;
  justify-content: flex-end;
`;
export const AnimatedErrorLog = Animated.createAnimatedComponent(ErrorLog);

const Errormessage = styled.Text`
  width: 300px;
  /* background:orange; */
  text-align: center;
  font-size: 20px;
  color: white;
`;
export const ErrorText = Animated.createAnimatedComponent(Errormessage);
