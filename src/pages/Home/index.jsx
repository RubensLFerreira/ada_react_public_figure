import { Link } from "react-router-dom";

import { AllFigures } from "../AllFigures";

import "./Home.css";

export const Home = () => {
  return (
    <div className="container">
      <Link
        to={"/cadastrar"}
        style={{ margin: "2rem 0 0 1.3rem" }}
        type="button"
        className="btn btn-primary"
      >
        Novo cadastro
      </Link>

      <AllFigures />
    </div>
  );
};
