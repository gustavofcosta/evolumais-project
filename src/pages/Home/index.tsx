import Typewriter from "typewriter-effect";
import {
  AiFillCloseCircle,
  AiOutlineBehance,
  AiOutlineInstagram,
  AiOutlineWhatsApp,
} from "react-icons/ai";

import Container from "./styled";
import menu from "../../assets/images/menu.svg";
import logo from "../../assets/images/logo.svg";
import heart from "../../assets/images/heart.svg";
import video from "../../assets/video/bg.mp4";
import { useState } from "react";

const Home = () => {
  const [isSidebarOpen , setIsSidebarOpen ] = useState<boolean>(false);

  return (
    <div>
      <Container>
        <video src={video} autoPlay loop muted/>
        <img src={heart} alt="heart" className="heart" />
        <div className="nav-wrapper">
          <nav>
            <button onClick={() => setIsSidebarOpen(!isSidebarOpen )}>
              <img src={menu} alt="Menu" />
            </button>
            <div className="sidebar">
              <div className="links">
                <ul>
                  <li>Home</li>
                  <li>O que Fazemos</li>
                  <li>Work</li>
                  <li>Orçamento</li>
                </ul>
                <button
                  className="close-menu"
                  onClick={() => setIsSidebarOpen(!isSidebarOpen )}
                >
                  <AiFillCloseCircle />
                </button>
              </div>
              <ul className="social">
                <li>
                  <AiOutlineInstagram />
                </li>
                <li>
                  <AiOutlineBehance />
                </li>
                <li>
                  <AiOutlineWhatsApp />
                </li>
              </ul>
            </div>
          </nav>
        </div>
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
      <div className="full-page"></div>
    </div>
  );
};
export default Home;
