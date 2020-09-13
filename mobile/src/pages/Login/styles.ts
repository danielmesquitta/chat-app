import styled from 'styled-components/native';

import Background from '~/styles/Background';

export const Container = styled(Background)`
  justify-content: center;
  align-items: center;
`;

export const Title = styled.Text`
  color: #fafafa;
  font-size: 40px;
  padding: 10px;
`;

export const Form = styled.View`
  justify-content: space-between;
  width: 90%;
  padding: 10px;
`;

export const Input = styled.TextInput`
  background: #dcdcdc;
  border: 2px solid #555;
  color: #333;
  border-radius: 5px;
  font-size: 18px;
  padding: 10px 15px;
  width: 100%;
`;
