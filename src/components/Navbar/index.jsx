export const Navbar = () => {
  function logout() {
    localStorage.removeItem("token");
    window.location.href = "/";
  }

  return (
    <nav
      className="navbar navbar-expand-lg bg-body-tertiary  bg-dark"
      data-bs-theme="dark"
    >
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          ADA
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link active"
                aria-current="page"
                href="/cadastrar"
              >
                Cadastrar
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link disabled" aria-disabled="true">
                Usuário
              </a>
            </li>
          </ul>
          <form className="d-flex" role="search">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link" aria-disabled="true" href="/login">
                  Login
                </a>
              </li>

              <li className="nav-item">
                <a
                  className="nav-link"
                  aria-disabled="true"
                  onClick={() => {
                    logout();
                  }}
                >
                  Logout
                </a>
              </li>
            </ul>
            {/* <input
              className="form-control me-2"
              type="search"
              placeholder="Pesquisar..."
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Pesquisar
            </button> */}
          </form>
        </div>
      </div>
    </nav>
  );
};
