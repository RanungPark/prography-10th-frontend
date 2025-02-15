import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
	${reset}

  * {
  box-sizing: border-box;
  }

  input,
  textarea,
  select,
  button {
    border: none;
    outline: none;
    background: transparent;
    font: inherit;
    color: inherit;
  }

  img {
    max-width: 100%;
    height: auto;
    display: block;  
  }

  ul,
  ol {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  li {
    margin: 0;
  }

  a {
    text-decoration: none;
    color: inherit; 
  }

  body{
    font-family:  Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, "Helvetica Neue", "Segoe UI", "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
    ;
    background-color: ${({ theme }) => theme.colors.black};
    color: ${({ theme }) => theme.colors.white};
  }
`;

export default GlobalStyle;
