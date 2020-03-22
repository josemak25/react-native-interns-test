import React, { useState, useEffect } from 'react';
import { AsyncStorage, Settings, Alert } from 'react-native';

export type CHECK_USER_LOGIN = {
  remember: boolean;
  firstTime: boolean;
};

export const useLocalCustom = async () => {
  try {
    const get_user_launch = await AsyncStorage.multiGet([
      'remember',
      'firstTime'
    ]);

    const getItems = get_user_launch.reduce(
      (acc, val) => {
        if (val[0] === 'remember') {
          acc.remember = Boolean(val[1]);
        }
        if (val[0] === 'firstTime') {
          acc.firstTime = Boolean(val[1]);
        }
        return acc;
      },
      { remember: false, firstTime: false }
    );
    return getItems;
  } catch (error) {
    console.error(error.message);
  }
};

export const setFirst_Time_Application_load = async () => {
  AsyncStorage.setItem('firstTime', 'true');
};
