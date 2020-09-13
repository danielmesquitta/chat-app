import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  /*Default*/
  *,
  *::after,
  *::before{
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }
  html{
    scroll-behavior: smooth;    
  }  
  html, body, #root{
    min-height: 100%;
    background: #222;
  }
  body{
    background: fixed center no-repeat cover;
    -webkit-font-smoothing: antialiased !important;
  }  
  body, input, button{
    font-family: Arial, sans-serif;
  }
  button{
    cursor: pointer;
  }
  a{
    text-decoration: none;
    cursor: pointer;    
  }
  ul{
    list-style: none;
  }  
`;
