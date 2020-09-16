import styled, { css } from 'styled-components';
import { IMessageProps } from '~/@types/props';

export const Container = styled.li<IMessageProps>`
  border: 1px solid transparent;
  border-radius: 5px;
  margin-bottom: 1rem;
  padding: 0.5rem 1rem;
  ${props =>
    props.mine
      ? css`
          text-align: right;
          margin-left: auto;
          background: #c3e88d;
          border-color: #82be27;
        `
      : css`
          margin-right: auto;
          background: #89ddff;
          border-color: #1abeff;
        `};
`;
