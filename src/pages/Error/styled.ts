import styled from "styled-components";

const Wrapper = styled.main`
  text-align: center;
  padding: 1rem;

  figure {
    max-width: 600px;
    display: block;
    margin-bottom: 2rem;

    img {
      height: 100%;
      width: 100%;
    }

    ${({ theme }) => theme.responsive.md} {
      width: 40rem;
      height: 40rem;
    }
  }

  display: flex;
  align-items: center;
  justify-content: center;
  h3 {
    margin-bottom: 0.5rem;
  }
  p {
    margin-top: 0;
    margin-bottom: 0.5rem;
    color: ${({ theme }) => theme.colors.grey_500};
  }
  a {
    color: ${({ theme }) => theme.colors.grey_500};
    text-decoration: underline;
    text-transform: capitalize;
  }
`;

export default Wrapper;
