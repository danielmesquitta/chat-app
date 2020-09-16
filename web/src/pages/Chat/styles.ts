import styled from 'styled-components';

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
  margin: auto;
  max-width: 1200px;
  width: 100%;
  box-shadow: 0 0 2px black;
`;

export const MessageList = styled.ul`
  padding: 1rem;
  display: flex;
  flex-direction: column;
`;

export const Form = styled.form`
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
