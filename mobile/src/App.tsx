import 'react-native-gesture-handler';
import React from 'react';
import { StatusBar } from 'react-native';

import Routes from './Routes';

const App: React.FC = () => {
  return (
    <>
      <StatusBar backgroundColor="#222" barStyle="light-content" />
      <Routes />
    </>
  );
};

export default App;