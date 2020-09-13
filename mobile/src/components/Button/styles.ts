import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled(RectButton)`
  background: steelblue;
  border: 2px solid #555;
  border-radius: 5px;
  padding: 10px 15px;
  margin-top: 10px;
`;

export const Text = styled.Text`
  text-align: center;
  font-size: 18px;
  color: #fff;
`;
