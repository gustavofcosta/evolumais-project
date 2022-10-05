import styled from "styled-components";

import background from "../../assets/images/bg.jpg";

const Container = styled.section`
  max-width: 3000px;
  margin: 0 auto;
  height: 100vh;
  width: 100%;
  background-image: url(${background});
  background-position: center;
  background-repeat: no-repeat;
  overflow: hidden;

  nav {
    width: 100%;
    display: flex;
    justify-content: flex-end;
    padding: 2rem 1rem;

    button {
      width: 5rem;
      height: 5rem;
      background-color: transparent;
      border: none;
      cursor: pointer;

      ${({ theme }) => theme.responsive.md} {
        width: 9rem;
        height: 9rem;
      }

      img {
        height: 100%;
        width: 100%;
      }
    }
  }

  .wrapper {
    height: 100vh;
    width: 100vw;
    margin-top: -9rem;
    display: flex;
    justify-content: center;
    align-items: center;

    ${({ theme }) => theme.responsive.md} {
      margin-top: -14rem;
    }

    figure {
      height: 15rem;
      width: 15rem;

      img {
        height: 100%;
        width: 100%;
      }

      ${({ theme }) => theme.responsive.md} {
        height: 20rem;
        width: 20rem;
      }
    }

    .typewriter {
      position: absolute;
      bottom: 1rem;
      color: ${({ theme }) => theme.colors.white};
      font-size: 0.9rem;
      font-weight: bolder;

      ${({ theme }) => theme.responsive.md} {
        font-size: 2rem;
      }

      ${({ theme }) => theme.responsive.md} {
        font-size: 3rem;
      }
    }
  }
`;

export default Container;
