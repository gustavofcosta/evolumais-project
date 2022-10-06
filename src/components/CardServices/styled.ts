import styled from "styled-components";

export const Wrapper = styled.ul`
  width: 100vw;
  display: grid;
  justify-content: center;
  gap: 1rem;

  ${({ theme }) => theme.responsive.lg} {
    display: flex;
    gap: 2rem;
  }

  li {
    background-color: ${({ theme }) => theme.colors.secondary_500};
    color: ${({ theme }) => theme.colors.white};
    border-radius: ${({ theme }) => theme.border.md};
    display: flex;
    flex-direction: column;
    width: 21rem;
    height: 30rem;
    justify-content: center;
    align-items: center;
    margin: 2px;

    img {
      height: 7rem;
    }

    h2 {
      margin-top: 2rem;
      margin-bottom: 5rem;
      font-weight: bold;
    }

    p {
      font-size: 1.4rem;
    }
  }
`;
