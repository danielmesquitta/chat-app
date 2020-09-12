import React from 'react';
import { Provider } from 'react-redux';

import GlobalStyles from './styles/global';
import Chat from './pages/Chat';
import store from './store';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <GlobalStyles />
      <Chat />
    </Provider>
  );
};

export default App;
