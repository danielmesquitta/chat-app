import React from 'react';

import { Container, Text, User } from './styles';
import { IMessageProps } from '~/@types/props';

const Message: React.FC<IMessageProps> = ({
  children,
  mine,
  user,
  ...rest
}) => {
  return (
    <Container mine={mine} user={user} {...rest}>
      <Text mine={mine}>
        <User>{user}</User>
        {'\n' + children}
      </Text>
    </Container>
  );
};

export default Message;
