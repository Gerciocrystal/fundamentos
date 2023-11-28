// ShoppingCart.js
import menu1 from "../assets/images/menu1.jpg";
import PropTypes from "prop-types";
import { Button } from "@chakra-ui/react";
const ShoppingCart = ({ cart, onCheckout, setTotal, distance, loading }) => {
  const calculateTotal = (cart) => {
    setTotal(
      cart.reduce((total, item) => total + item.price * item.quantity, 0)
    );
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };
  return (
    <div className="cart-box">
      <ul className="cart-box-ul">
        <h4 className="cart-h4">Seu pedido.</h4>
        {cart.map((item) => (
          <li key={item.id}>
            <div className="cart-item">
              <div className="img-box">
                <img
                  src={menu1}
                  alt="product image"
                  className="product-img"
                  width="50"
                  height="50"
                  loading="lazy"
                />
              </div>

              <h4 className="product-name">
                {item.name} <span className="small">{item.quantity}</span>
              </h4>
              <p className="product-price">
                <span className="small">MZN</span>
                {item.price}
              </p>
            </div>
          </li>
        ))}
      </ul>

      <div className="cart-btn-group">
        <button className="btn btn-secondary">
          <p>Total: {calculateTotal(cart)}</p>
        </button>
        <button className="btn btn-secondary">
          <p>Distancia: {(distance / 1000).toFixed(1)}Km</p>
        </button>
        <Button isLoading={loading} borderRadius="base">
          <button className="btn btn-primary" onClick={onCheckout}>
            Checkout
          </button>
        </Button>
      </div>
    </div>
  );
};

ShoppingCart.propTypes = {
  cart: PropTypes.array.isRequired,
  onCheckout: PropTypes.func.isRequired,
  distance: PropTypes.number.isRequired,
  setTotal: PropTypes.func.isRequired,
  loading: PropTypes.bool,
};
ShoppingCart.defaultProps = {
  cart: [{ quantity: 0, price: 0, name: "" }],
};

export default ShoppingCart;
