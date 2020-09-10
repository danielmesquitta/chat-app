import React, { useState, FormEvent } from 'react';
import io from 'socket.io-client';

import {
  Container,
  MessageList,
  MessageMine,
  MessageOther,
  Form,
} from './styles';

const Chat: React.FC = () => {
  const [messages, setMessages] = useState<string[]>([]);
  const [message, setMessage] = useState('');

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const formattedMessage = message.trim();
    if (formattedMessage) {
      setMessages([...messages, formattedMessage]);
    }
    setMessage('');
  }

  return (
    <Container>
      <MessageList>
        {messages.map((message, index) => (
          <MessageMine key={index}>{message}</MessageMine>
        ))}
      </MessageList>

      <Form onSubmit={handleSubmit}>
        <input
          placeholder="Your message"
          onChange={e => setMessage(e.target.value)}
          value={message}
        />
      </Form>
    </Container>
  );
};

export default Chat;
