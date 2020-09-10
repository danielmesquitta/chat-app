import React from 'react';

import GlobalStyles from './styles/global';
import Chat from './pages/Chat';

const App: React.FC = () => {
  return (
    <>
      <GlobalStyles />
      <Chat />
    </>
  );
};

export default App;
