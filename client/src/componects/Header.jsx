import PropTypes from "prop-types";
import cart from "../assets/images/cart.svg";

const Header = ({ isVisible, setVisible }) => {
  return (
    <header>
      <nav className="navbar">
        <div className="navbar-wrapper">
          <a href="#">
            <h3 className="logo">EntregaFood</h3>
          </a>

          <ul className="navbar-nav">
            <li>
              <a href="#home" className="nav-link">
                Início
              </a>
            </li>

            <li>
              <a href="#about" className="nav-link">
                Sobre
              </a>
            </li>

            <li>
              <a href="#services" className="nav-link">
                Serviços
              </a>
            </li>

            <li>
              <a href="#menu" className="nav-link">
                Nosso Menu
              </a>
            </li>

            <li>
              <a href="#testimonials" className="nav-link">
                Testemunhos
              </a>
            </li>
          </ul>

          <div className="navbar-btn-group">
            <button
              className="shopping-cart-btn"
              onClick={() => setVisible(!isVisible)}
            >
              <img src={cart} alt="shopping cart icon" width="18" />
              <span className="count">5</span>
            </button>

            <button className="menu-toggle-btn">
              <span className="line one"></span>
              <span className="line two"></span>
              <span className="line three"></span>
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};
Header.propTypes = {
  isVisible: PropTypes.bool,
  setVisible: PropTypes.func,
};
export default Header;
