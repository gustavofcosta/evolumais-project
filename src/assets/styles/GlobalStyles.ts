import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *,
  ::after,
  ::before {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

   /* fonts */
   @import url('https://fonts.googleapis.com/css2?family=Cabin&family=Roboto+Condensed:wght@400;700&display=swap');

  html {
    font-family: Sans-Serif;
  } /*16px*/

  body {
    background: ${({ theme }) => theme.colors.backGroundColor};
    font-family: ${({ theme }) => theme.fonts.bodyFont};
    font-weight: 400;
    line-height: 1.75;
    color: ${({ theme }) => theme.colors.textColor};
    overflow-x: hidden;
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
    margin-bottom: 1.38rem;
    font-family: ${({ theme }) => theme.fonts.heading_font};
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
    letter-spacing: ${({ theme }) => theme.text.letter_spacing};
  }
  a,
  button {
    line-height: 1.15;

  }
  button:disabled {
    cursor: not-allowed;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }

  .img {
    width: 100%;
    display: block;
    object-fit: cover;
  }

  /* buttons */
  .btn {
    cursor: pointer;
    color: ${({ theme }) => theme.colors.white};
    background: ${({ theme }) => theme.colors.primary_500};
    border: transparent;
    border-radius: ${({ theme }) => theme.border.sm};
    letter-spacing: ${({ theme }) => theme.text.letter_spacing};
    padding: 0.375rem 0.75rem;
    box-shadow: ${({ theme }) => theme.shadow.sm};;
    transition: ${({ theme }) => theme.transition.slow};
    text-transform: capitalize;
    display: inline-block;
  }
  .btn:hover {
    background: ${({ theme }) => theme.colors.primary_700};
    box-shadow: ${({ theme }) => theme.shadow.lg};
  }
  .btn-hipster {
    color: ${({ theme }) => theme.colors.primary_500};;
    background: ${({ theme }) => theme.colors.primary_500};
  }
  .btn-hipster:hover {
    color: ${({ theme }) => theme.colors.primary_200};
    background: ${({ theme }) => theme.colors.primary_700};
  }
  .btn-block {
    width: 100%;
  }
  .btn-hero {
    font-size: 1.25rem;
    padding: 0.5rem 1.25rem;
  }
  .btn-danger {
    background: ${({ theme }) => theme.colors.colorRedLight};
    color: ${({ theme }) => theme.colors.colorGreenDark};
  }
  .btn-danger:hover {
    background: ${({ theme }) => theme.colors.colorGreenDark};
    color: ${({ theme }) => theme.colors.white};
  }
  /* alerts */
  .alert {
    padding: 0.375rem 0.75rem;
    margin-bottom: 1rem;
    border-color: transparent;
    border-radius: ${({ theme }) => theme.border.sm};
    text-align: center;
    letter-spacing: ${({ theme }) => theme.text.letter_spacing};
  }

  .alert-danger {
    color: ${({ theme }) => theme.colors.colorRedDark};
    background: ${({ theme }) => theme.colors.colorRedLight};
  }
  .alert-success {
    color: ${({ theme }) => theme.colors.colorGreenDark};
    background: ${({ theme }) => theme.colors.colorGreenLight};
  }

  /* form */
  .form {
    width: 90vw;
    max-width: ${({ theme }) => theme.width.fixed_width};
    background: ${({ theme }) => theme.colors.white};
    border-radius: ${({ theme }) => theme.border.sm};
    box-shadow: ${({ theme }) => theme.shadow.md};
    padding: 2rem 2.5rem;
    margin: 3rem auto;
    transition: ${({ theme }) => theme.transition.slow};
  }
  .form:hover {
    box-shadow: ${({ theme }) => theme.shadow.xl};
  }
  .form-label {
    display: block;
    font-size: ${({ theme }) => theme.text.small};
    margin-bottom: 0.5rem;
    text-transform: capitalize;
    letter-spacing: ${({ theme }) => theme.text.letter_spacing};
  }
  .form-input,
  .form-textarea,
  .form-select {
    width: 100%;
    padding: 0.375rem 0.75rem;
    border-radius: ${({ theme }) => theme.border.sm};
    background: ${({ theme }) => theme.colors.backGroundColor};
    border: 1px solid ${({ theme }) => theme.colors.grey_200};
  }
  .form-input,
  .form-select,
  .btn-block {
    height: 35px;
  }
  .form-row {
    margin-bottom: 1rem;
  }

  .form-textarea {
    height: 7rem;
  }
  ::placeholder {
    font-family: inherit;
    color: ${({ theme }) => theme.colors.grey_400};
  }
  .form-alert {
    color: ${({ theme }) => theme.colors.colorRedDark};
    letter-spacing: ${({ theme }) => theme.text.letter_spacing};
    text-transform: capitalize;
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
    animation: spinner 2s linear infinite;
  }
  .loading-center {
    margin: 0 auto;
  }


  /* title */
  .title {
    text-align: center;
  }

  .title-underline {
    background: ${({ theme }) => theme.colors.grey_500};
    width: 7rem;
    height: 0.25rem;
    margin: 0 auto;
    margin-top: -1rem;
  }

  .full-page {
    min-height: 100vh;
    width: 100vw;
  }
`;
