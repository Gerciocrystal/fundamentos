const Footer = () => {
  return (
    <footer>
      <div className="footer-wrapper">
        <div className="social-link">
          <a href="#">
            <ion-icon name="logo-twitter"></ion-icon>
          </a>
          <a href="#">
            <ion-icon name="logo-instagram"></ion-icon>
          </a>
          <a href="#">
            <ion-icon name="logo-facebook"></ion-icon>
          </a>
          <a href="#">
            <ion-icon name="logo-youtube"></ion-icon>
          </a>
        </div>
        <p className="copyright">
          &copy; Copyright 2023 EntregaFood. Todos direitos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
