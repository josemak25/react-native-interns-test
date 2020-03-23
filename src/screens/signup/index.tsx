import React, { useState } from 'react';
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
import Axios from 'axios';
import { useStoreContext } from '../../store/index';
import { registrationSuccess } from '../../store/user/actions';

import { NavigationInterface } from '../types';
import { CheckBox } from 'react-native';
import PhoneIcon from '../../../assets/icons/phone';
import Button from '../../components/button';

interface SignupScreenProp extends NavigationInterface {
  testID?: string;
  userinput: Signup;
}

type Signup = {
  name: string;
  username: string;
  email: string;
  mobileNumber: string;
  password: string;
};

export default function SignupScreen(props: SignupScreenProp) {
  // props: SignupScreenProp
  const { dispatch } = useStoreContext();
  const [state, setstate] = useState<SignupScreenProp['userinput']>({
    name: '',
    username: '',
    email: '',
    mobileNumber: '',
    password: ''
  });

  const Submit_Signup = async () => {
    alert(state.mobileNumber);
    try {
      const user = await Axios.post(
        'http://ci.level5.digital:9005/api/v1/users',
        { ...state }
      );
      console.log(user);
      dispatch(registrationSuccess(user.data));
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <Container>
      <AppLogo source={require('../../../assets/images/logo.png')} />
      <FormContainer>
        <FormInputs>
          <InputItem>
            <MaterialIcons name="person-outline" size={30} color="#282F56" />
            <Inputs
              placeholder="Name"
              onChangeText={val => setstate({ ...state, name: val })}
            />
          </InputItem>
          <InputItem>
            <MaterialIcons name="person-outline" size={30} color="#282F56" />
            <Inputs
              placeholder="Username"
              onChangeText={val => setstate({ ...state, username: val })}
            />
          </InputItem>
          <InputItem>
            <MaterialIcons name="mail-outline" size={30} color="#282F56" />
            <Inputs
              placeholder="Email"
              onChangeText={val => setstate({ ...state, email: val })}
            />
          </InputItem>
          <InputItem>
            <MaterialIcons name="smartphone" size={30} color="#282F56" />
            <Inputs
              placeholder="Phone"
              keyboardType="phone-pad"
              onChangeText={val => setstate({ ...state, mobileNumber: val })}
            />
          </InputItem>
          <InputItem>
            <MaterialIcons name="lock-outline" size={30} color="#282F56" />
            <Inputs
              placeholder="Password"
              onChangeText={val => setstate({ ...state, password: val })}
            />
          </InputItem>
        </FormInputs>
      </FormContainer>
      <Buttons>
        <TouchableOpacity onPress={() => Submit_Signup()}>
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
