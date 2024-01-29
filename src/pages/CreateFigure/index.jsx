import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

export const CreateFigure = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    birth: "",
    height: 0,
    about: "",
    gender: "Male",
    profession: "",
    nationality: "",
    photo: "",
    user_id: "9d0a7839-fda0-4078-99ca-3d9dea13e603",
  });

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;

    if (type === "file") {
      setFormData({
        ...formData,
        [name]: files[0],
      });
    } else {
      setFormData({
        ...formData,
        [name]: type === "number" ? Number(value) : value,
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formDataToSend = new FormData();

    for (const key in formData) {
      formDataToSend.append(key, formData[key]);
    }

    try {
      await axios.post("http://localhost:8080/public-figure", formDataToSend, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      console.log("Arquivo enviado com sucesso!");
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
        <h3 className="title-primary">Cadastro de figuras públicas</h3>
        <div className="card-body">
          <form
            className="needs-validation was-validated form"
            onSubmit={handleSubmit}
          >
            <div className="mb-1">
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
              <input
                type="date"
                className="form-control"
                value={formData.birth}
                onChange={handleChange}
                name="birth"
                id="birth"
                placeholder="Data de nascimento"
                aria-describedby="birthHelp"
                required
              />
              <div id="birthHelp" className="form-text">
                Data de nascimento, por favor!
              </div>
            </div>

            <div className="mb-1">
              <input
                type="number"
                className="form-control"
                value={formData.height}
                onChange={handleChange}
                name="height"
                id="height"
                placeholder="Ex: 154"
                aria-describedby="heightHelp"
                required
              />
              <div id="heightHelp" className="form-text">
                Altura, por favor!
              </div>
            </div>

            <div className="mb-1">
              <input
                type="text"
                className="form-control"
                value={formData.about}
                onChange={handleChange}
                name="about"
                id="about"
                placeholder="Descrição"
                aria-describedby="aboutHelp"
                required
              />
              <div id="aboutHelp" className="form-text">
                Descrição, por favor!
              </div>
            </div>

            <div className="mb-4">
              <select
                className="form-select"
                id="gender"
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                required
              >
                <option value="male">Homem</option>
                <option value="female">Mulher</option>
                <option value="other">Outros</option>
              </select>
              <div className="invalid-feedback">Selecione um gênero.</div>
            </div>

            <div className="mb-1">
              <input
                type="text"
                className="form-control"
                value={formData.profession}
                onChange={handleChange}
                name="profession"
                id="profession"
                placeholder="Profissão"
                aria-describedby="professionHelp"
                required
              />
              <div id="professionHelp" className="form-text">
                Profissão, por favor!
              </div>
            </div>

            <div className="mb-1">
              <input
                type="text"
                className="form-control"
                value={formData.nationality}
                onChange={handleChange}
                name="nationality"
                id="nationality"
                placeholder="Nacionalidade"
                aria-describedby="nationalityHelp"
                required
              />
              <div id="nationalityHelp" className="form-text">
                Nacionalidade, por favor!
              </div>
            </div>

            <div className="mb-1">
              <input
                type="file"
                className="form-control"
                value={formData.foto}
                onChange={handleChange}
                name="photo"
                id="photo"
                placeholder="Foto de perfil"
                aria-describedby="photoHelp"
                required
              />
              <div id="photoHelp" className="form-text">
                Foto, por favor!
              </div>
            </div>

            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <Link to={"/"} className="btn btn-secondary">
                Voltar
              </Link>

              <button type="submit" className="btn btn-success">
                Enviar
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
