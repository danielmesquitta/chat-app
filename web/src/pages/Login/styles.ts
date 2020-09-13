import styled from 'styled-components';

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  margin: auto;
  max-width: 1200px;
  width: 100%;

  h1 {
    color: #fafafa;
    font-size: 3rem;
    padding: 1rem;
  }

  form {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
    max-width: 600px;
    padding: 1rem;

    input {
      background: #dcdcdc;
      border: 2px solid #555;
      color: #333;
      border-radius: 5px;
      font-size: 1.2rem;
      padding: 0.8rem 1rem;
      width: 100%;

      :focus {
        border-color: #a3f7ff;
        box-shadow: 0 0 7px #a3f7ff;
        outline: none;
      }
    }
  }
`;
