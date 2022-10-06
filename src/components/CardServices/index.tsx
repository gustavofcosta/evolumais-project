import { services } from "../../data/data";
import { Wrapper } from "./styled";

interface PropsService {
  img: string;
  name: string;
  description: string;
}

const CardServices = () => {
  return (
    <Wrapper>
      {services.map((service: PropsService) => {
        const { img, name, description } = service;

        return (
          <li key={name}>
            <img src={img} alt={name} />
            <h2>{name}</h2>
            <p>{description}</p>
          </li>
        );
      })}
    </Wrapper>
  );
};
export default CardServices;
