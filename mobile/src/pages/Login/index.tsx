import React, { useState } from 'react';

import { Container, Title, Form, Input } from './styles';
import Button from '~/components/Button';
import { Alert } from 'react-native';

const Login: React.FC = () => {
  const [name, setName] = useState('');

  function handleSubmit() {
    if (!name) {
      Alert.alert('Attention', 'You need to enter your username');
      return;
    }
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
