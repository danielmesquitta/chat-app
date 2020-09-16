import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { Container } from './styles';
import Button from '~/components/Button';

import generateId from '~/utils/generateId';
import userActions from '~/store/modules/user/actions';

const userId = generateId();

const Login: React.FC = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const [name, setName] = useState('');

  async function handleSubmit() {
    const newUser = { id: userId, name };
    dispatch(userActions.createUser(newUser));
    history.push('/chat');
  }

  return (
    <Container>
      <h1>Chat App</h1>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Your username"
          required
          value={name}
          onChange={e => setName(e.target.value)}
        />
        <Button type="submit">Go to the chat room</Button>
      </form>
    </Container>
  );
};

export default Login;
