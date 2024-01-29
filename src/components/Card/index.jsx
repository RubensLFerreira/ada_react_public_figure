import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

export const Card = ({ figure, showLink = true }) => {
  const [photo, setPhoto] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const apiUrl = `http://localhost:8080/public-figure/photo/${figure.photo}`;

    axios
      .get(apiUrl, { responseType: "blob" })
      .then((response) => {
        const photo = URL.createObjectURL(new Blob([response.data]));
        setPhoto(photo);
      })
      .catch((error) => {
        console.error("Erro ao buscar a imagem:", error);
        setError(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [figure.photo]);

  if (error) {
    return <div>Erro ao buscar dados: {error.message}</div>;
  }

  if (loading) {
    return <div>Carregando...</div>;
  }

  return (
    <div className="card text-bg-dark" style={{ width: "18rem" }}>
      <img
        style={{ height: "200px", width: "100%", display: "block" }}
        src={photo}
        className="card-img-top"
        alt={figure.name}
      />
      <div className="card-body">
        <h5 className="card-title">{figure.name}</h5>
        <p>Profissão: {figure.profession}</p>
        <p>Gênero: {figure.gender}</p>
        <p>Nacionalidade: {figure.nationality}</p>

        {showLink && (
          <Link to={`/${figure.id}`} className="btn btn-primary">
            Detalhes
          </Link>
        )}
      </div>
    </div>
  );
};

Card.propTypes = {
  figure: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    profession: PropTypes.string.isRequired,
    user_id: PropTypes.number.isRequired,
    gender: PropTypes.number.isRequired,
    nationality: PropTypes.string.isRequired,
    photo: PropTypes.string.isRequired,
  }).isRequired,
  showLink: PropTypes.bool,
};
