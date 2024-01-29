
import { Link } from "react-router-dom";
import { AllFigures } from "../AllFigures";

import "./Home.css";

export const Home = () => {
  return (
    <div>
      <div className="container">
        <h1 className="title-primary">
          Bem-vindo ao <span>Figuras públicas</span>
        </h1>

        <Link to={'/public-figure/cadastrar'} className="btn btn-secondary">
        Criar novo registro
        </Link>

        {/* <h3 className="title-second">
          Milhões de filmes, séries para descobrir. Venha explorar!
        </h3> */}
      </div>
      <AllFigures />
    </div>
  );
};
