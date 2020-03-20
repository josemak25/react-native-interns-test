import React from 'react';
import { NavigationInterface } from '../types';
import { MaterialIcons } from '@expo/vector-icons';
import {
  Container,
  AppLogo,
  SignUpText,
  LoginButton,
  LoginText,
  SignUpButton,
  FormContainer,
  Inputs,
  InputItem,
  FormInputs,
  FormAddOns,
  PrivacyText1,
  PrivacyText2,
  Buttons
} from './styles';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { CheckBox } from 'react-native';
import PhoneIcon from '../../../assets/icons/phone';
import Button from '../../components/button';

interface SignupScreenProp extends NavigationInterface {
  testID?: string;
}

export default function SignupScreen(props: SignupScreenProp) {
  // props: SignupScreenProp
  return (
    <Container>
      <AppLogo source={require('../../../assets/images/logo.png')} />
      <FormContainer>
        <FormInputs>
          <InputItem>
            <MaterialIcons name="person-outline" size={30} color="#282F56" />
            <Inputs placeholder="Name" />
          </InputItem>
          <InputItem>
            <MaterialIcons name="person-outline" size={30} color="#282F56" />
            <Inputs placeholder="Username" />
          </InputItem>
          <InputItem>
            <MaterialIcons name="mail-outline" size={30} color="#282F56" />
            <Inputs placeholder="Email" />
          </InputItem>
          <InputItem>
            <MaterialIcons name="smartphone" size={30} color="#282F56" />
            <Inputs placeholder="Phone" />
          </InputItem>
          <InputItem>
            <MaterialIcons name="lock-outline" size={30} color="#282F56" />
            <Inputs placeholder="Password" />
          </InputItem>
        </FormInputs>
      </FormContainer>
      <Buttons>
        <TouchableOpacity onPress={() => {}}>
          <SignUpButton>
            <SignUpText>SignUp</SignUpText>
          </SignUpButton>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => props.navigation.navigate('SigninScreen')}
        >
          <LoginButton>
            <LoginText>Log In</LoginText>
          </LoginButton>
        </TouchableOpacity>
      </Buttons>
      <FormAddOns>
        <PrivacyText1>By signing up you have agreed to our</PrivacyText1>
        <PrivacyText2>Terms of Use & Privacy Policy</PrivacyText2>
      </FormAddOns>
    </Container>
  );
}
