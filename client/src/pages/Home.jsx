import Header from "../componects/Header";
import Main from "../componects/main";
import PropTypes from "prop-types";
import Footer from "../componects/Footer";
const Home = ({ isVisible, setVisible }) => {
  return (
    <div className="container">
      <Header isVisible={isVisible} setVisible={setVisible} />
      <Main />
      <Footer />
    </div>
  );
};
Home.propTypes = {
  isVisible: PropTypes.bool,
  setVisible: PropTypes.func,
};
export default Home;
