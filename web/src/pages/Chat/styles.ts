import styled from 'styled-components';

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
  margin: auto;
  max-width: 1200px;
  width: 100%;
`;

export const MessageList = styled.ul`
  padding: 1rem;
  display: flex;
  flex-direction: column;
`;

export const Message = styled.li`
  border: 1px solid transparent;
  border-radius: 5px;
  margin-bottom: 1rem;
  padding: 0.5rem 1rem;
`;

export const MessageMine = styled(Message)`
  text-align: right;
  margin-left: auto;
  background: #c3e88d;
  border-color: #82be27;
`;

export const MessageOther = styled(Message)`
  margin-right: auto;
  background: #89ddff;
  border-color: #1abeff;
`;

export const Form = styled.form`
  background: #434758;
  padding: 1rem;

  input {
    background: #dcdcdc;
    border: 2px solid #555;
    color: #333;
    border-radius: 5px;
    font-size: 1.2rem;
    padding: 0.5rem 1rem;
    width: 100%;

    :focus {
      border-color: #a3f7ff;
      box-shadow: 0 0 7px #a3f7ff;
      outline: none;
    }
  }
`;
