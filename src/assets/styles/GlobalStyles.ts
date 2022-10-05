import styled, { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

  *{
    margin: 0;
    padding: 0;
    outline: none;
    box-sizing: border-box;
  }

  body {
    font-family: sans-serif;
    background-color: ${({ theme }) => theme.colors.backGroundColor};
    color: ${({ theme }) => theme.colors.textColor};
  }

  p {
    margin-bottom: 1.5rem;
    max-width: 40em;
  }

  h1,
  h2,
  h3,
  h4,
  h5 {
    margin: 0;
    margin-bottom: 1.4rem;
    font-weight: 400;
    line-height: 1.3;
    text-transform: capitalize;
    letter-spacing: ${({ theme }) => theme.text.letter_spacing};
  }

  h1 {
    margin-top: 0;
    font-size: 3.052rem;
  }

  h2 {
    font-size: 2.441rem;
  }

  h3 {
    font-size: 1.953rem;
  }

  h4 {
    font-size: 1.563rem;
  }

  h5 {
    font-size: 1.25rem;
  }

  small,
  .text-small {
  font-size: ${({ theme }) => theme.text.small};
  }


  a {
    text-decoration: none;
  }

  ul {
    list-style-type: none;
  }

  .img {
    width: 100%;
    display: block;
    object-fit: cover;
  }


  .alert {
    padding: 0.375rem 0.75rem;
    margin-bottom: 1rem;
    border-color: transparent;
    border-radius: ${({ theme }) => theme.border.sm};
  }

  .alert-danger {
    color: ${({ theme }) => theme.colors.colorRedDark};
    background: ${({ theme }) => theme.colors.colorRedLight};
  }
  .alert-success {
    color: ${({ theme }) => theme.colors.colorGreenDark};
    background: ${({ theme }) => theme.colors.colorGreenLight};
  }


  @keyframes spinner {
    to {
      transform: rotate(360deg);
    }
  }

  .loading {
    width: 6rem;
    height: 6rem;
    border: 5px solid ${({ theme }) => theme.colors.grey_400};
    border-radius: 50%;
    border-top-color: ${({ theme }) => theme.colors.grey_500};
    animation: spinner 0.6s linear infinite;
  }

  .loading {
    display: flex;
  }

  .title {
    text-align: center;
  }
`;
