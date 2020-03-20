import React,{ useState, useEffect } from "react";
import { AsyncStorage, Settings } from "react-native";

export type CHECK_USER_LOGIN = {
  remember: boolean;
  firstTime: boolean;
};

export const useLocalCustom = () => {
    return AsyncStorage.multiGet(['remember', 'firstTime']).then(res => {
      const getItems = res.reduce((acc, val) => {
            if(val[0] === 'remember'){
                acc.remember = Boolean(val[1]);
            }
            if(val[0] === 'firstTime'){
                acc.firstTime = Boolean(val[1]);
            }
          return acc;
        },{ remember: false, firstTime: false });

        return getItems
       })
};


export const setFirst_Time_Application_load = async ()=>{
    console.log("setting item");
    AsyncStorage.setItem('firstTime','true')
}