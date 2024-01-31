import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

export const Admin = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    role: "admin",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post("http://localhost:8080/user", formData);
      console.log("Usuário cadastrado com sucesso!");
      navigate("/");
    } catch (error) {
      console.error("Erro ao enviar o arquivo:", error);
    }
  };

  return (
    <div
      className="container"
      style={{
        maxWidth: "30rem",
      }}
    >
      <div className="card text-bg-dark">
        <h3 className="title-primary">Cadastro de usuário</h3>
        <div className="card-body">
          <form
            className="needs-validation was-validated form"
            onSubmit={handleSubmit}
          >
            <div className="mb-1">
              <label htmlFor="name">Nome</label>
              <input
                type="text"
                className="form-control"
                value={formData.name}
                onChange={handleChange}
                name="name"
                id="name"
                placeholder="Nome completo"
                aria-describedby="nameHelp"
                required
              />
              <div id="nameHelp" className="form-text">
                Nome completo, por favor!
              </div>
            </div>

            <div className="mb-1">
              <label htmlFor="email">E-mail</label>
              <input
                type="email"
                className="form-control"
                value={formData.email}
                onChange={handleChange}
                name="email"
                id="email"
                placeholder="E-mail"
                aria-describedby="emailHelp"
                required
              />
              <div id="emailHelp" className="form-text">
                E-mail, por favor!
              </div>
            </div>

            <div className="mb-1">
              <label htmlFor="name">Senha</label>
              <input
                type="password"
                className="form-control"
                value={formData.password}
                onChange={handleChange}
                name="password"
                id="password"
                placeholder="Minimo 3 caracteres"
                aria-describedby="passwordHelp"
                required
              />
              <div id="passwordHelp" className="form-text">
                Senha, por favor!
              </div>
            </div>

            <div className="mb-4">
              <label htmlFor="role">Cargo</label>
              <select
                className="form-select"
                id="role"
                name="role"
                value={formData.role}
                onChange={handleChange}
                required
              >
                <option value="admin">Admin</option>
              </select>
              <div className="invalid-feedback">Selecione um gênero.</div>
            </div>

            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <Link to={"/"} className="btn btn-secondary">
                Voltar
              </Link>

              <div>
                <Link to={"/login"} className="btn btn-primary">
                  Login
                </Link>
                <button
                  style={{ marginLeft: "1rem" }}
                  type="submit"
                  className="btn btn-success"
                >
                  Cadastrar
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
