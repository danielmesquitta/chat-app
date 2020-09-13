import React from 'react';
import { useHistory } from 'react-router-dom';

import { Container } from './styles';
import Button from '~/components/Button';

const NotFound: React.FC = () => {
  const history = useHistory();

  return (
    <Container>
      <h1>Sorry, This page was not found</h1>
      <Button onClick={() => history.push('/')}>Go back to Login</Button>
    </Container>
  );
};

export default NotFound;
