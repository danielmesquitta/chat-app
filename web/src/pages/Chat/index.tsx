import React, { useState, useEffect, FormEvent } from 'react';
import { useHistory } from 'react-router-dom';
import io from 'socket.io-client';
import { useDispatch, useSelector } from 'react-redux';

import {
  Container,
  MessageList,
  MessageMine,
  MessageOther,
  Form,
} from './styles';
import { IMessageData, IUser, IReduxState } from '~/@types/store';
import chatActions from '~/store/modules/chat/actions';

const { REACT_APP_SERVER_HOST, REACT_APP_SERVER_PORT } = process.env;

const socket = io(`http://${REACT_APP_SERVER_HOST}:${REACT_APP_SERVER_PORT}`);

const Chat: React.FC = () => {
  const dispatch = useDispatch();

  const history = useHistory();

  const chat = useSelector<IReduxState, IMessageData[]>(state => state.chat);
  const user = useSelector<IReduxState, IUser>(state => state.user);

  const [newMessage, setNewMessage] = useState('');

  useEffect(() => {
    if (!user.name || !user.id) {
      history.push('/');
    }
  }, [history, user.id, user.name]);

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
        {chat.map(({ message, userId, userName }, index) =>
          userId === user.id ? (
            <MessageMine key={index}>
              <b>{userName}</b>
              <br />
              {message}
            </MessageMine>
          ) : (
            <MessageOther key={index}>
              <b>{userName}</b>
              <br />
              {message}
            </MessageOther>
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
