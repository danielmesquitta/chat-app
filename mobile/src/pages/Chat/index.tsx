import { SERVER_HOST, SERVER_PORT } from '@env';
import React, { useState, useEffect, useMemo } from 'react';
import io from 'socket.io-client';
import { useSelector, useDispatch } from 'react-redux';

import { Container, MessageList, Form, Input } from './styles';
import Message from '~/components/Message';
import { IMessageData, IReduxState } from '~/@types/store';
import chatActions from '~/store/modules/chat/actions';
import store from '~/store';

const Chat: React.FC = () => {
  const dispatch = useDispatch();
  const { chat, user } = useSelector<IReduxState, IReduxState>(state => state);
  const [newMessage, setNewMessage] = useState('');

  const socket = useMemo(
    () =>
      io(
        `http://${SERVER_HOST}:${SERVER_PORT}?user=${
          store.getState().user.name
        }`
      ),
    []
  );

  useEffect(() => {
    const handleNewMessage = (messageData: IMessageData) =>
      dispatch(chatActions.addMessage(messageData));

    socket.on('chat.message', handleNewMessage);
  }, [dispatch, socket]);

  function handleSubmit() {
    const message = newMessage.trim();
    if (message) {
      socket.emit('chat.message', {
        userId: user.id,
        message,
        userName: user.name,
      });
    }
    setNewMessage('');
  }

  return (
    <Container>
      <MessageList>
        {chat.map(({ message, userId, userName }, index) => (
          <Message
            key={String(index)}
            mine={userId === user.id}
            user={userName}
          >
            {message}
          </Message>
        ))}
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
