import styled from "styled-components";

export const Container = styled.section<{ isSidebarOpen: boolean }>`
  position: relative;
  max-width: 3000px;
  margin: 0 auto;
  height: 100vh;
  width: 100%;
  overflow: hidden;

  video {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .heart {
    position: absolute;
    left: 2rem;
    top: 5rem;
    height: 1.5rem;
    animation: animation 2s linear infinite;

    @keyframes animation {
      0% {
        opacity: 1;
      }
      25% {
        opacity: 0.8;
      }
      50% {
        opacity: 0.6;
      }
      75% {
        opacity: 0.4;
      }
      100% {
        opacity: 0.2;
      }
    }
  }

  .nav-wrapper {
    position: absolute;
    width: 100%;
    width: 100%;
    top: 0;
    display: flex;
    justify-content: flex-end;
    z-index: 99;

    nav {
      padding: 2rem 1rem;

      button {
        width: 5rem;
        height: 5rem;
        background-color: transparent;
        border: none;

        ${({ theme }) => theme.responsive.md} {
          width: 6rem;
          height: 6rem;
        }

        ${({ theme }) => theme.responsive.lg} {
          width: 7rem;
          height: 7rem;
        }

        img {
          height: 100%;
          width: 100%;
          cursor: pointer;
        }
      }

      .sidebar {
        position: absolute;
        background-color: ${({ theme }) => theme.colors.primary_500};
        color: ${({ theme }) => theme.colors.white};
        height: 20rem;
        width: 20rem;
        right: 0%;
        top: 0;
        border-radius: ${({ theme }) => theme.border.md};
        margin: 1rem;
        box-shadow: 2px 6px 28px 2px rgba(0, 0, 0, 0.49);
        transition: ${({ theme }) => theme.transition.slow};
        transform: ${({ isSidebarOpen }) =>
          isSidebarOpen ? " translate(0)" : " translate(105%)"};

        .links {
          display: flex;
          height: 15rem;
          justify-content: space-between;

          ${({ theme }) => theme.responsive.md} {
            height: 19rem;
          }
        }

        ${({ theme }) => theme.responsive.md} {
          height: 25rem;
          width: 30rem;
        }

        ul {
          font-size: 1.5rem;
          padding: 2rem;
          letter-spacing: ${({ theme }) => theme.text.letter_spacing};
          cursor: pointer;

          li {
            transition: ${({ theme }) => theme.transition.slow};

            :hover {
              color: ${({ theme }) => theme.colors.secondary_300};
            }
          }

          ${({ theme }) => theme.responsive.md} {
            font-size: 2rem;
          }
        }

        .close-menu {
          font-size: 1.5rem;
          color: ${({ theme }) => theme.colors.secondary_400};
          cursor: pointer;

          :hover {
            color: ${({ theme }) => theme.colors.secondary_200};
          }
        }

        .social {
          display: flex;
          justify-content: center;
          gap: 2rem;
          font-size: 1.5rem;
          cursor: pointer;
          transition: ${({ theme }) => theme.transition.slow};

          li {
            :hover {
              color: ${({ theme }) => theme.colors.secondary_400};
            }
          }

          ${({ theme }) => theme.responsive.md} {
            font-size: 2rem;
          }
        }
      }
    }

    .show-sidebar {
      transform: translate(0);
    }
  }

  .wrapper {
    position: absolute;
    top: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;

    ${({ theme }) => theme.responsive.md} {
    }

    figure {
      height: 10rem;
      width: 10rem;

      img {
        height: 100%;
        width: 100%;
      }

      ${({ theme }) => theme.responsive.md} {
        height: 14rem;
        width: 14rem;
      }

      ${({ theme }) => theme.responsive.lg} {
        height: 15rem;
        width: 15rem;
      }
    }

    .typewriter {
      position: absolute;
      bottom: 1rem;
      color: ${({ theme }) => theme.colors.white};
      font-size: 0.9rem;
      font-weight: bolder;

      ${({ theme }) => theme.responsive.md} {
        font-size: 1.4rem;
      }

      ${({ theme }) => theme.responsive.md} {
        font-size: 1.8rem;
      }
    }
  }
`;

export const Flowers = styled.section`
  margin-top: -10rem;
  height: 100%;
  width: 100vw;
  overflow: hidden;

  ${({ theme }) => theme.responsive.lg} {
    margin-top: -30rem;
  }

  img {
    height: 100%;
    width: 105%;
  }
`;
