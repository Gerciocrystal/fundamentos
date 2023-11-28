import profile from "../../assets/images/profile.avif";
import PropTypes from "prop-types";
import { Text } from "@chakra-ui/react";
const Header = ({ setCurrentSection, currentSection }) => {
  return (
    <header>
      <nav className="navbar">
        <div className="navbar-wrapper">
          <a href="#">
            <h3 className="logo">EntregaFood</h3>
          </a>

          <ul className="navbar-nav">
            <li onClick={() => setCurrentSection("home")}>
              <Text
                className="nav-link"
                cursor="pointer"
                color={currentSection == "home" && "hsl(45, 91%, 58%)"}
              >
                Início
              </Text>
            </li>
            <li onClick={() => setCurrentSection("newRestaurant")}>
              <Text
                className="nav-link"
                cursor="pointer"
                color={currentSection == "newRestaurant" && "hsl(45, 91%, 58%)"}
              >
                Add Restaurante
              </Text>
            </li>

            <li onClick={() => setCurrentSection("editRestaurant")}>
              <Text
                className="nav-link"
                cursor="pointer"
                color={
                  currentSection == "editRestaurant" && "hsl(45, 91%, 58%)"
                }
              >
                Edit Restaurante
              </Text>
            </li>
          </ul>

          <div className="navbar-btn-group">
            <button className="shopping-cart-btn">
              <img src={profile} alt="shopping cart icon" width="18" />
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
  setCurrentSection: PropTypes.func,
  currentSection: PropTypes.string,
};
export default Header;
