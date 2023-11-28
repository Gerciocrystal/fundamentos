import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import menu1 from "../assets/images/menu1.jpg";
import menu from "../assets/images/menu.svg";
import menu2 from "../assets/images/menu2.jpg";
import menu3 from "../assets/images/menu2.jpg";
import menu4 from "../assets/images/menu4.jpg";
import menu5 from "../assets/images/menu5.jpg";
import ShoppingCart from "../componects/ShoppingCart";
import Header from "../componects/Header";
import PropTypes from "prop-types";
import { distanceCalculator } from "../componects/DistanceCalculator";
import { Center, Spinner, useDisclosure, useToast } from "@chakra-ui/react";
import axios from "axios";
import PhoneOwner from "../componects/PhoneOwner";
const SingleOrder = ({ isVisible, setVisible }) => {
  const { id } = useParams();
  const [error, setError] = useState(true);
  const [cart, setCart] = useState([]);
  const [alert, setAlert] = useState(false);
  const [distance, setDistance] = useState(0);
  const [total, setTotal] = useState(0);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const menus = [menu1, menu2, menu3, menu3, menu4, menu5];
  const Toast = useToast();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [restourant, setRestourant] = useState({
    _id: 0,
    name: "",
    position: { latitude: 0, longitude: 0 },
    rating: 4.5,
    menu: [{ _id: 0, name: "", description: "", price: 0 }],
  });
  useEffect(() => {
    fetch(`/api/restourant/${id}`, {
      method: "GET",
      headers: {
        "Content-type": " aplication/json",
      },
    })
      .then((resp) => resp.json())
      .then((data) => {
        setRestourant(data);

        distanceCalculator(data.position).then((data) => {
          setDistance(data);
        });
      })
      .catch((err) => {
        console.log(err);
        setError(true);
        setTimeout(() => {
          setError(false);
        }, 1000);
      });
  }, [id]);
  setTimeout(() => {
    setError(false);
  }, 1000);
  const handleAddToCart = (item) => {
    const updatedCart = [...cart];
    const existingItemIndex = updatedCart.findIndex((i) => i._id === item._id);

    if (existingItemIndex !== -1) {
      updatedCart[existingItemIndex].quantity += 1;
    } else {
      updatedCart.push({ ...item, quantity: 1 });
    }

    setCart(updatedCart);
    Toast({
      title: `${item.name} adicionado ao carinho`,
      status: "success",
      duration: 5000,
      isClosable: true,
      position: "top",
    });
  };
  const handleCheckout = async (data) => {
    if (cart.length == 0) {
      Toast({
        title: `Escolha pelomenos produto`,
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "top",
      });

      return;
    }
    setLoading(true);
    setAlert(true);
    setTimeout(() => {
      setAlert(false);
    }, 3500);
    try {
      const temp = {
        restourantId: restourant._id,
        cart: cart,
        total: total,
        distance: distance,
        location: data.location,
        ownerPhone: `258${data.ownerPhone}`,
        ownerName: data.ownerName,
      };

      const order = await axios.post(`/api/order/`, temp);

      Toast({
        title: `Pedido submetido`,
        status: "success",
        duration: 5000,
        isClosable: true,
        position: "top",
      });
      navigate("/recibo", { state: { data: order.data } });
    } catch (error) {
      console.log(error);
      Toast({
        title: error.message,
        status: "warning",
        duration: 5000,
        isClosable: true,
        position: "top",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container">
      {error && (
        <div className="alertHandler error">
          Erro no Processo de procura de Comida
        </div>
      )}

      <Header isVisible={isVisible} setVisible={setVisible} />
      <main>
        <section className="home background" id="home">
          <div className="home-left">
            <h1 className="main-heading">
              Bem vindo ao Restautante {restourant.name}
            </h1>
            <p className="home-text">{restourant.location}</p>
            <button className="btn btn-primary btn-icon">
              <img src={menu} alt="menu icon" />
              Saiba +
            </button>
          </div>

          <div className="home-right">
            <img
              src={menus[Math.floor(Math.random() * 6)]}
              alt="food image"
              className="food-img food-1"
              width="200"
              loading="lazy"
            />
          </div>
        </section>

        {alert && <div className="alertHandler">Pedido submetido</div>}
        <div className="products-grid single-grid">
          {restourant ? (
            restourant.menu.map((menu) => (
              <button key={menu._id}>
                <div className="product-card">
                  <div className="img-box">
                    <img
                      src={menus[Math.floor(Math.random() * 6)]}
                      alt="product image"
                      className="product-img"
                      width="200"
                      loading="lazy"
                    />
                  </div>

                  <div className="product-content">
                    <div className="wrapper">
                      <h3 className="product-name">{menu.name}</h3>

                      <p className="product-price">
                        <span>{menu.price}</span>
                        <span className="small">MZN</span>
                      </p>
                    </div>

                    <p className="product-text">{menu.description}</p>

                    <div className="product-rating">
                      <button onClick={() => handleAddToCart(menu)}>add</button>
                    </div>
                  </div>
                </div>
              </button>
            ))
          ) : (
            <Center height="100vh">
              <Spinner
                thickness="4px"
                speed="0.65s"
                emptyColor="gray.200"
                color="blue.500"
                size="5xl" // Você pode ajustar o tamanho aqui (xs, sm, md, lg, xl)
              />
            </Center>
          )}
        </div>
      </main>
      {isVisible && (
        <ShoppingCart
          setTotal={setTotal}
          cart={cart}
          onCheckout={onOpen}
          distance={distance}
          loading={loading}
        />
      )}
      <PhoneOwner
        isOpen={isOpen}
        handleCheckOut={handleCheckout}
        onClose={onClose}
      />
    </div>
  );
};
SingleOrder.propTypes = {
  isVisible: PropTypes.bool,
  setVisible: PropTypes.func,
};
export default SingleOrder;
