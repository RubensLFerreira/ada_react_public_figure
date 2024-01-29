import { useState, useEffect } from "react";
import axios from "axios";

import { Card } from "../../components/Card";
import "./AllFigures.css";

export const AllFigures = () => {
  const [figures, setFigures] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      axios
        .get("http://localhost:8080/public-figure")
        .then((res) => {
          setFigures(res.data);
        })
        .catch((err) => {
          setError(err);
        })
        .finally(() => {
          setLoading(false);
        });
    };
    fetchData();
  }, []);

  if (error) {
    return <div>Erro ao buscar dados: {error.message}</div>;
  }

  if (loading) {
    return <div>Carregando...</div>;
  }

  return (
    <div className="container">
      <div className="movies-container">
        {figures.length === 0 && <p>Carregando...</p>}
        {figures &&
          figures.map((figure) => <Card key={figure.id} figure={figure} />)}
      </div>
    </div>
  );
};
