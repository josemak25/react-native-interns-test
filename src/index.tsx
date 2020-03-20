import React, { useState, useEffect } from 'react';
import Router from './router';
import { StoreProvider } from './store';
import ThemeProvider from './theme';
import { AsyncStorage } from 'react-native';

export default function AppRouter() {
  return (
    <StoreProvider>
      <ThemeProvider>
        <Router />
      </ThemeProvider>
    </StoreProvider>
  );
}
