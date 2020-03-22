import React, { useState, useEffect } from 'react';
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
  AnimatedErrorLog,
  ErrorText,
  FormAddOns,
  FormCheckBox,
  RememberMeText,
  Buttons
} from './styles';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { CheckBox, Animated, Easing } from 'react-native';
import Axios from 'axios';
import { loginSuccess } from '../../store/user/actions';
import { useStoreContext } from '../../store';
import { set_remember_me } from './logic';

interface SigninScreenProp extends NavigationInterface {
  testID?: string;
  userinput: Signin;
}

type Signin = {
  username: string;
  password: string;
};

export default function SigninScreen(props: SigninScreenProp) {
  // props: SigninScreenProp
  const { dispatch } = useStoreContext();
  const [errorHeight] = useState<Animated.Value>(new Animated.Value(-300));
  const [checkBox, setCheckbox] = useState<boolean>(false);
  const [ErrorLog, setErrorLog] = useState<{ [key: string]: string | boolean }>(
    {
      error: '',
      check_error: false
    }
  );
  const [state, setstate] = useState<SigninScreenProp['userinput']>({
    username: '',
    password: ''
  });
  useEffect(() => {
    if (ErrorLog.check_error === true) {
      Animated.timing(errorHeight, {
        toValue: 0,
        duration: 100,
        easing: Easing.bounce
      }).start();
      setTimeout(() => {
        Animated.timing(errorHeight, {
          toValue: -300,
          duration: 200,
          easing: Easing.bounce
        }).start(() => {
          setErrorLog({ error: '', check_error: false });
          errorHeight.setValue(-300);
        });
      }, 2000);
    }
  }, [ErrorLog]);

  const Submit_Signin = async () => {
    try {
      const user = await Axios.post(
        'http://ci.level5.digital:9005/api/v1/auth/login',
        { ...state }
      );
      console.log(user);
      if (user.data.message !== 'success') {
        setErrorLog({ error: user.data.message, check_error: true });
      }
      if (user.data.token) {
        dispatch(loginSuccess(user.data));
        set_remember_me(checkBox);
      }
    } catch (error) {
      console.error(error.message);
    }
  };
  return (
    <Container>
      <AnimatedErrorLog style={{ top: errorHeight }}>
        <ErrorText>{ErrorLog.error}</ErrorText>
      </AnimatedErrorLog>
      <AppLogo source={require('../../../assets/images/logo.png')} />
      <FormContainer>
        <FormInputs>
          <UsernameItems>
            <MaterialIcons name="person-outline" size={30} color="#282F56" />
            <UsernameInput
              placeholder="Username"
              onChangeText={val => setstate({ ...state, username: val })}
            />
          </UsernameItems>
          <PasswordItems>
            <MaterialIcons name="lock-outline" size={30} color="#282F56" />
            <PasswordInput
              placeholder="Password"
              secureTextEntry={true}
              onChangeText={val => setstate({ ...state, password: val })}
            />
          </PasswordItems>
        </FormInputs>
        <FormAddOns>
          <FormCheckBox>
            <CheckBox
              value={checkBox}
              onChange={() => {
                checkBox ? setCheckbox(false) : setCheckbox(true);
              }}
            />
            <RememberMeText>Remember Me</RememberMeText>
          </FormCheckBox>
          <RememberMeText>Forgot Password</RememberMeText>
        </FormAddOns>
      </FormContainer>
      <Buttons>
        <TouchableOpacity onPress={Submit_Signin} style={{ width: '100%' }}>
          <LoginButton>
            <LoginText>Login</LoginText>
          </LoginButton>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => props.navigation.navigate('SignupScreen')}
        >
          <CreateAccountButton>
            <CreateAccountText>Create Account</CreateAccountText>
          </CreateAccountButton>
        </TouchableOpacity>
      </Buttons>
    </Container>
  );
}
