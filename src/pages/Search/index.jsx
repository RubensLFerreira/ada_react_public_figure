import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import axios from "axios";

import { Card } from "../../components/Card";

export const Search = () => {
  const [searchParams] = useSearchParams();
  const [figures, setFigures] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const query = searchParams.get("name");

  console.log(figures);

  console.log(`http://localhost:8080/public-figure/search-name?name=${query}`);

  useEffect(() => {
    const fetchData = async () => {
      axios
        .get(`http://localhost:8080/public-figure/search-name?name=${query}`)
        .then((res) => {
          setFigures(res.data.figureExists);
        })
        .catch((err) => {
          setError(err);
        })
        .finally(() => {
          setLoading(false);
        });
    };

    fetchData();
  }, [query]);

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
