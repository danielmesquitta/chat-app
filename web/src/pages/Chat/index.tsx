import React, { useState, useEffect, FormEvent } from 'react';
import io from 'socket.io-client';
import { useDispatch, useSelector } from 'react-redux';

import {
  Container,
  MessageList,
  MessageMine,
  MessageOther,
  Form,
} from './styles';
import { IMessageData, IReduxState } from '~/@types/store';
import chatActions from '~/store/modules/chat/actions';
import generateId from '~/utils/generateId';

const socket = io('http://localhost:3333');
const myId = generateId();

const Chat: React.FC = () => {
  const dispatch = useDispatch();
  const chat = useSelector<IReduxState, IMessageData[]>(state => state.chat);

  const [newMessage, setNewMessage] = useState('');

  useEffect(() => {
    const handleNewMessage = (messageData: IMessageData) =>
      dispatch(chatActions.addMessage(messageData));

    socket.on('chat.message', handleNewMessage);
    return () => socket.off('chat.message', handleNewMessage) as any;
  }, [dispatch]);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const message = newMessage.trim();
    if (message) {
      socket.emit('chat.message', {
        id: myId,
        message,
      });
    }
    setNewMessage('');
  }

  return (
    <Container>
      <MessageList>
        {chat.map(({ message, id }, index) =>
          id === myId ? (
            <MessageMine key={index}>{message}</MessageMine>
          ) : (
            <MessageOther key={index}>{message}</MessageOther>
          )
        )}
      </MessageList>

      <Form onSubmit={handleSubmit}>
        <input
          placeholder="Your message"
          onChange={e => setNewMessage(e.target.value)}
          value={newMessage}
        />
      </Form>
    </Container>
  );
};

export default Chat;
