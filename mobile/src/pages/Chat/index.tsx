import React, { useState } from 'react';
import { Alert } from 'react-native';

import { Container, MessageList, Form, Input } from './styles';

import Message from '~/components/Message';

const Chat: React.FC = () => {
  const [newMessage, setNewMessage] = useState('');

  function handleSubmit() {
    Alert.alert(newMessage);
    setNewMessage('');
  }

  return (
    <Container>
      <MessageList>
        <Message mine user="Daniel">
          Hello
        </Message>
        <Message user="Diego">Hy</Message>
      </MessageList>

      <Form>
        <Input
          placeholder="Your message"
          onChangeText={setNewMessage}
          value={newMessage}
          returnKeyType="send"
          onSubmitEditing={handleSubmit}
        />
      </Form>
    </Container>
  );
};

export default Chat;
