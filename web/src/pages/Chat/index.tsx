import React, { useState, useEffect, FormEvent } from 'react';
import { IMessageData } from '~/@types/store';
import io from 'socket.io-client';

import {
  Container,
  MessageList,
  MessageMine,
  MessageOther,
  Form,
} from './styles';

const socket = io('http://localhost:3333');
socket.on('connect', () => console.log('New socket.io-client connection'));

const myId = Math.random().toString(36).substr(2, 9);

const Chat: React.FC = () => {
  const [messagesData, setMessagesData] = useState<IMessageData[]>([]);
  const [newMessage, setNewMessage] = useState('');

  useEffect(() => {
    const handleNewMessage = (messageData: IMessageData) =>
      setMessagesData([...messagesData, messageData]);

    socket.on('chat.message', handleNewMessage);
    return () => socket.off('chat.message', handleNewMessage) as any;
  }, [messagesData]);

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
        {messagesData.map(({ message, id }, index) =>
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
