import styled from 'styled-components/native';

import Background from '~/styles/Background';

export const Container = styled(Background)`
  align-items: center;
  justify-content: space-between;
`;

export const MessageList = styled.View`
  width: 90%;
`;

export const Form = styled.View`
  padding: 16px;
  width: 100%;
`;

export const Input = styled.TextInput`
  background: #dcdcdc;
  border: 2px solid #555;
  color: #333;
  border-radius: 5px;
  font-size: 18px;
  padding: 8px 16px;
`;
