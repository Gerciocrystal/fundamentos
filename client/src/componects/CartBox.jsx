import menu1 from "../assets/images/menu1.jpg";
import menu2 from "../assets/images/menu2.jpg";
import menu3 from "../assets/images/menu3.jpg";
import menu4 from "../assets/images/menu4.jpg";
import menu5 from "../assets/images/menu5.jpg";

const CartBox = () => {
  return (
    <div className="cart-box">
      <ul className="cart-box-ul">
        <h4 className="cart-h4">Seu pedido.</h4>

        <li>
          <a href="#" className="cart-item">
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

            <h5 className="product-name">Café</h5>
            <p className="product-price">
              <span className="small">MZN</span>9
            </p>
          </a>
        </li>

        <li>
          <a href="#" className="cart-item">
            <div className="img-box">
              <img
                src={menu2}
                alt="product image"
                className="product-img"
                width="50"
                height="50"
                loading="lazy"
              />
            </div>

            <h5 className="product-name">Salada com mel</h5>
            <p className="product-price">
              <span className="small">MZN</span>14
            </p>
          </a>
        </li>

        <li>
          <a href="#" className="cart-item">
            <div className="img-box">
              <img
                src={menu3}
                alt="product image"
                className="product-img"
                width="50"
                height="50"
                loading="lazy"
              />
            </div>

            <h5 className="product-name">Peixe grelhado</h5>
            <p className="product-price">
              <span className="small">MZN</span>4
            </p>
          </a>
        </li>

        <li>
          <a href="#" className="cart-item">
            <div className="img-box">
              <img
                src={menu4}
                alt="product image"
                className="product-img"
                width="50"
                height="50"
                loading="lazy"
              />
            </div>

            <h5 className="product-name">Hambúrguer</h5>
            <p className="product-price">
              <span className="small">MZN</span>11
            </p>
          </a>
        </li>

        <li>
          <a href="#" className="cart-item">
            <div className="img-box">
              <img
                src={menu5}
                alt="product image"
                className="product-img"
                width="50"
                height="50"
                loading="lazy"
              />
            </div>

            <h5 className="product-name">Sea bream carpaccio</h5>
            <p className="product-price">
              <span className="small">MZN</span>19
            </p>
          </a>
        </li>
      </ul>

      <div className="cart-btn-group">
        <button className="btn btn-secondary">Verificar pedido</button>
        <button className="btn btn-primary">Checkout</button>
      </div>
    </div>
  );
};
export default CartBox;
