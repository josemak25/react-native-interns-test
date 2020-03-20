import React from 'react';
import { NavigationInterface } from '../types';
import { MaterialIcons } from '@expo/vector-icons';
import {
  Container,
  AppLogo,
  LoginText,
  CreateAccountButton,
  CreateAccountText,
  LoginButton,
  FormContainer,
  UsernameInput,
  PasswordInput,
  PasswordItems,
  UsernameItems,
  FormInputs,
  FormAddOns,
  FormCheckBox,
  RememberMeText,
  Buttons
} from './styles';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { CheckBox } from 'react-native';

interface SigninScreenProp extends NavigationInterface {
  testID?: string;
}

export default function SigninScreen() {
  // props: SigninScreenProp
  return (
    <Container>
      <AppLogo source={require('../../../assets/images/logo.png')} />
      <FormContainer>
        <FormInputs>
          <UsernameItems>
            <MaterialIcons name="person-outline" size={30} color="#282F56" />
            <UsernameInput placeholder="Username" />
          </UsernameItems>
          <PasswordItems>
            <MaterialIcons name="lock-outline" size={30} color="#282F56" />
            <PasswordInput placeholder="Password" />
          </PasswordItems>
        </FormInputs>
        <FormAddOns>
          <FormCheckBox>
            <CheckBox value={false} onValueChange={() => {}} />
            <RememberMeText>Remember Me</RememberMeText>
          </FormCheckBox>
          <RememberMeText>Forgot Password</RememberMeText>
        </FormAddOns>
      </FormContainer>
      <Buttons>
        <TouchableOpacity onPress={() => {}} style={{ width: '100%' }}>
          <LoginButton>
            <LoginText>Login</LoginText>
          </LoginButton>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {}}>
          <CreateAccountButton>
            <CreateAccountText>Create Account</CreateAccountText>
          </CreateAccountButton>
        </TouchableOpacity>
      </Buttons>
    </Container>
  );
}
