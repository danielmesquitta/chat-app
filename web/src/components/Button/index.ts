import styled from 'styled-components';
import { darken } from 'polished';

const Button = styled.button`
  background: steelblue;
  border: 2px solid #555;
  color: #fff;
  border-radius: 5px;
  font-size: 1.2rem;
  padding: 0.8rem 2rem;
  margin-top: 1rem;
  transition: all 0.2s;

  :hover {
    background: ${darken(0.03, 'steelblue')};
  }
`;

export default Button;
