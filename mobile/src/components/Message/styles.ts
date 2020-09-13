import styled, { css } from 'styled-components/native';
import { IMessageProps } from '~/@types/props';

export const Container = styled.View<IMessageProps>`
  border: 1px solid transparent;
  border-radius: 5px;
  margin-bottom: 10px;
  padding: 5px 16px;

  ${props =>
    props.mine
      ? css`
          background: #c3e88d;
          border-color: #82be27;
          margin-left: auto;
        `
      : css`
          background: #89ddff;
          border-color: #1abeff;
          margin-right: auto;
        `};
`;

export const Text = styled.Text<IMessageProps>`
  font-size: 16px;
  ${props =>
    props.mine
      ? css`
          text-align: right;
        `
      : css`
          text-align: left;
        `};
`;

export const User = styled.Text`
  font-size: 16px;

  font-weight: bold;
`;
