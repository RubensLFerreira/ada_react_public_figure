import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

import "./DetailsFigures.css";

export const DetailsFigure = () => {
  const { id } = useParams();
  const [figures, setFigures] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      axios
        .get(`http://localhost:8080/public-figure/${id}`)
        .then((res) => {
          setFigures(res.data.figure);
        })
        .catch((err) => {
          setError(err);
        })
        .finally(() => {
          setLoading(false);
        });
    };

    fetchData();
  }, [id]);

  if (error) {
    return <div>Erro ao buscar dados: {error.message}</div>;
  }

  if (loading) {
    return <div>Carregando...</div>;
  }

  return (
    <div className="container">
      <h4 style={{ marginTop: "2rem" }}>
        <Link to="/public-figure" class="btn btn-secondary">
          voltar
        </Link>
      </h4>
      {figures && (
        <div className="cards text-bg-dark mb-3">
          <div className="row g-0">
            <div className="col-md-4">
              <img
                className="card-img-top"
                src={
                  "https://ih1.redbubble.net/image.1893341687.8294/fposter,small,wall_texture,product,750x1000.jpg"
                }
                alt={figures.name}
              />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h3 className="card-title title-cards">{figures.name}</h3>
                <p className="card-text text-cards">
                  Profissão: {figures.profession}
                </p>
                <p className="card-text text-cards">Gênero: {figures.gender}</p>
                <p className="card-text text-cards">Altura: {figures.height}</p>
                <p className="card-text text-cards">
                  Nacionalidade: {figures.nationality}
                </p>
                <p className="card-text text-cards">Sobre: {figures.about}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
