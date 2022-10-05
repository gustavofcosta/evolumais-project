import Container from "./styled";
import Typewriter from "typewriter-effect";

import menu from "../../assets/images/menu.svg";

import logo from "../../assets/images/logo.svg";

const Home = () => {
  return (
    <div>
      <Container>
        <nav>
          <button>
            <img src={menu} alt="Menu" />
          </button>
        </nav>
        <div className="wrapper">
          <figure className="logo">
            <img src={logo} alt="Logo Evolumais" />
          </figure>
          <div className="typewriter">
            <Typewriter
              options={{
                strings: [
                  "A marca inteligente faz os corações baterem mais forte",
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </div>
        </div>
      </Container>
    </div>
  );
};
export default Home;
