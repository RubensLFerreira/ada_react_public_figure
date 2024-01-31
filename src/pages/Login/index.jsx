import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";

export const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value, type } = e.target;

    setFormData({
      ...formData,
      [name]: type === "number" ? Number(value) : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:8080/user/login",
        formData
      );

      const { token } = response.data;

      localStorage.setItem("token", token);

      navigate("/");
    } catch (error) {
      console.error("Erro ao fazer login:", error);
    }
  };

  return (
    <div className="container" style={{ maxWidth: "30rem" }}>
      <div className="card text-bg-dark">
        <h3 className="title-primary">Login</h3>

        <div className="card-body">
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                E-mail
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                placeholder="E-mail"
                required
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                Senha
              </label>
              <input
                type="password"
                className="form-control"
                id="password"
                name="password"
                placeholder="Minimo 3 caracteres"
                required
                onChange={handleChange}
              />
            </div>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <Link to={"/"} className="btn btn-secondary">
                Voltar
              </Link>
              <div>
                <Link to={"/admin"} className="btn btn-primary">
                  Cadastrar-se
                </Link>
                <button
                  style={{ marginLeft: "1rem" }}
                  type="submit"
                  className="btn btn-success"
                >
                  Entrar
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
