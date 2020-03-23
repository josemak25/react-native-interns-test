import { AsyncStorage } from 'react-native';

export const set_remember_me = async (val: boolean) => {
  try {
    const get_remember_me = await AsyncStorage.getItem('remember');
    if (val && !get_remember_me) {
      AsyncStorage.setItem('remember', 'true');
      return;
    }
    AsyncStorage.setItem('remember', 'false');
    return;
  } catch (error) {
    console.error(error.message);
  }
};
