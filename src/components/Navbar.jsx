import navbarDB from "../data/navbarDB";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark pt-4 mb-5">
      <div className="container">
        <a className="navbar-brand" href="#">
          <img className="logo img-fluid" src={navbarDB.logoSrc} alt="logo" />
        </a>
        <button
          className="navbar-toggler ms-auto"
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
          <ul className="navbar-nav mx-lg-auto mb-2 mb-lg-0">
            {navbarDB.navItems.map((items, index) =>
              items.dropdown ? (
                <li key={index} class="nav-item dropdown">
                  <a
                    class="nav-link dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    {items.name}
                  </a>
                  <ul class="dropdown-menu">
                    {items.dropdown.map((items, index) => (
                      <li key={index}>
                        <a class="dropdown-item" href="#">
                          {items.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </li>
              ) : (
                <li key={index} className="nav-item">
                  <a className="nav-link" aria-current="page" href="#">
                    {items.name}
                  </a>
                </li>
              )
            )}
          </ul>
        </div>
        <button
          className="btn navbtn__color text-white fw-bold w-auto px-3"
          type="submit"
        >
          <i class={`${navbarDB.button.iconClass} me-2`}></i>
          {navbarDB.button.text}
        </button>
      </div>
    </nav>
  );
};
export default Navbar;
