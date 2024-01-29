import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

export const Card = ({ figure, showLink = true }) => {
  const [photo, setPhoto] = useState("");

  // console.log(`http://localhost:8080/public-figure/photo/${figure.photo}`)

  useEffect(() => {
    // Rota da API para buscar a imagem
    const apiUrl = `http://localhost:8080/public-figure/photo/${figure.photo}`;

    // Faz a requisição para a API usando Axios
    axios
      .get(apiUrl, { responseType: "blob" })
      .then((response) => {
        // Converte o blob em uma URL de dados
        const photo = URL.createObjectURL(new Blob([response.data]));

        // Atualiza o estado com a URL da imagem
        setPhoto(photo);
      })
      .catch((error) => {
        console.error("Erro ao buscar a imagem:", error);
      });
  }, []);

  return (
    <div className="card text-bg-dark" style={{ width: "20rem" }}>
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
          <Link to={`/public-figure/${figure.id}`} className="btn btn-primary">
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
  }).isRequired,
  showLink: PropTypes.bool,
};
