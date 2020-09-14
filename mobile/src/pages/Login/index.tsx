import React, { useState } from 'react';
import { Alert } from 'react-native';
import { useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';

import { Container, Title, Form, Input } from './styles';
import Button from '~/components/Button';
import userActions from '~/store/modules/user/actions';
import generateId from '~/utils/generateId';

const userId = generateId();

const Login: React.FC = () => {
  const dispatch = useDispatch();
  const { navigate } = useNavigation();

  const [name, setName] = useState('');

  function handleSubmit() {
    if (!name) {
      return Alert.alert('Attention', 'You need to enter your username');
    }

    const newUser = { id: userId, name };
    dispatch(userActions.createUser(newUser));
    navigate('Chat', { userId });
  }

  return (
    <Container>
      <Title>Chat App</Title>
      <Form>
        <Input
          placeholder="Your username"
          value={name}
          onChangeText={setName}
        />
        <Button onPress={handleSubmit}>Go to the chat room</Button>
      </Form>
    </Container>
  );
};

export default Login;
