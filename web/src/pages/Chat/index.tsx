import React, { useState, useEffect, useMemo, FormEvent } from 'react';
import { useHistory } from 'react-router-dom';
import io from 'socket.io-client';
import { useDispatch, useSelector } from 'react-redux';

import { Container, MessageList, Form } from './styles';
import Message from '~/components/Message';
import { IMessageData, IReduxState } from '~/@types/store';
import chatActions from '~/store/modules/chat/actions';
import store from '~/store';

const { REACT_APP_SERVER_HOST, REACT_APP_SERVER_PORT } = process.env;

const Chat: React.FC = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const { chat, user } = useSelector<IReduxState, IReduxState>(state => state);
  const [newMessage, setNewMessage] = useState('');

  const socket = useMemo(
    () =>
      io(
        `http://${REACT_APP_SERVER_HOST}:${REACT_APP_SERVER_PORT}?user=${
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

  useEffect(() => {
    if (!user.name || !user.id) {
      history.push('/');
    }
  }, [history, user.id, user.name]);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
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
          <Message mine={userId === user.id} user={userName} key={index}>
            {message}
          </Message>
        ))}
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
