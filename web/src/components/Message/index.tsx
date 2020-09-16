import React from 'react';

import { Container } from './styles';
import { IMessageProps } from '~/@types/props';

const Message: React.FC<IMessageProps> = ({ children, user, ...rest }) => {
  return (
    <Container {...rest}>
      <b>{user}</b>
      <br />
      {children}
    </Container>
  );
};

export default Message;
