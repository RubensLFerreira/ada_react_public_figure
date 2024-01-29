import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

import "./DetailsFigures.css";

export const DetailsFigure = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const [figures, setFigures] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [photo, setPhoto] = useState("");
  const token = localStorage.getItem("token");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/public-figure/${id}`);
        setFigures(response.data.figure);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  useEffect(() => {
    const fetchPhoto = async () => {
      try {
        const apiUrl = `http://localhost:8080/public-figure/photo/${figures.photo}`;
        const response = await axios.get(apiUrl, { responseType: "blob" });
        const photoUrl = URL.createObjectURL(new Blob([response.data]));
        setPhoto(photoUrl);
      } catch (error) {
        console.error("Erro ao buscar a imagem:", error);
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    if (figures && figures.photo) {
      fetchPhoto();
    }
  }, [figures]);

  const excluirPersonagem = () => {
    axios
      .delete(`http://localhost:8080/public-figure/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(() => {
        console.log("Personagem excluído com sucesso");
        navigate("/");
      })
      .catch((error) => {
        console.error("Erro ao excluir personagem:", error);
      });
  };

  if (error) {
    return <div>Erro ao buscar dados: {error.message}</div>;
  }

  if (loading) {
    return <div>Carregando...</div>;
  }

  
  return (
    <div className="container">
      <div className="cards text-bg-dark mb-3">
        <div className="row g-0">
          <div className="col-md-4">
            <img className="card-img-top" src={photo} alt={figures.name} />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h3 className="card-title title-cards">{figures.name}</h3>
              <p className="card-text text-cards">Profissão: {figures.profession}</p>
              <p className="card-text text-cards">Gênero: {figures.gender}</p>
              <p className="card-text text-cards">Altura: {figures.height}</p>
              <p className="card-text text-cards">Nacionalidade: {figures.nationality}</p>
              <p className="card-text text-cards">Sobre: {figures.about}</p>
            </div>
            {token ? (
              <div className="card-footer" style={{ textAlign: "end", margin: "0 1rem 0 0" }}>
                <button className="btn btn-danger btn-sm" onClick={excluirPersonagem}>
                  Excluir personagem
                </button>
              </div>
            ) : (
              <div className="card-footer" style={{ textAlign: "end", margin: "0 1rem 0 0" }}>
                <button className="btn btn-danger btn-sm" disabled>
                  Excluir personagem
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
