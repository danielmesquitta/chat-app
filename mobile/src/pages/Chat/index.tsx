import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';
import { useSelector, useDispatch } from 'react-redux';

import { Container, MessageList, Form, Input } from './styles';

import Message from '~/components/Message';
import { IMessageData, IReduxState, IUser } from '~/@types/store';
import chatActions from '~/store/modules/chat/actions';

const socket = io('http://192.168.100.26:3333');

const Chat: React.FC = () => {
  const dispatch = useDispatch();

  const chat = useSelector<IReduxState, IMessageData[]>(state => state.chat);
  const user = useSelector<IReduxState, IUser>(state => state.user);

  const [newMessage, setNewMessage] = useState('');

  useEffect(() => {
    const handleNewMessage = (messageData: IMessageData) =>
      dispatch(chatActions.addMessage(messageData));

    socket.on('chat.message', handleNewMessage);
    return () => socket.off('chat.message', handleNewMessage) as any;
  }, [dispatch]);

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
