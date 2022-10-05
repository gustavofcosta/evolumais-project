import { Link } from "react-router-dom";
import Wrapper from "./styled";

import notFound from "../../assets/images/not-found.svg";

const Error = () => {
  return (
    <Wrapper className="full-page">
      <div>
        <figure>
          <img src={notFound} alt="not found" />
        </figure>
        <h3>Ah! página não foi encontrada</h3>
        <p>Não conseguimos encontrar a página que você está procurando</p>
        <Link to="/">Voltar para Home</Link>
      </div>
    </Wrapper>
  );
};

export default Error;
