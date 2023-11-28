import menu from "../assets/images/menu.svg";
import menu1 from "../assets/images/menu1.jpg";
import menu2 from "../assets/images/menu2.jpg";
import menu3 from "../assets/images/menu3.jpg";
import menu4 from "../assets/images/menu4.jpg";
import menu5 from "../assets/images/menu5.jpg";
import arrow from "../assets/images/arrow.svg";
import food1 from "../assets/images/food1.png";
import food2 from "../assets/images/food2.png";
import food3 from "../assets/images/food3.png";
import about_image from "../assets/images/about-image.jpg";
import circle from "../assets/images/circle.svg";
import ring from "../assets/images/ring.svg";
import testimonials1 from "../assets/images/testimonials1.jpg";
import testimonials2 from "../assets/images/testimonials2.jpg";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { Center, Spinner, useToast } from "@chakra-ui/react";

const Main = () => {
  const menus = [menu1, menu2, menu3, menu3, menu4, menu5];
  const Toast = useToast();
  const [restourants, setRestourants] = useState([
    {
      id: "",
      name: "",
      location: "",
      menu: [{ id: 0, name: "", description: "", price: 0 }],
    },
  ]);
  useEffect(() => {
    const fetchApresentacoes = async () => {
      fetch(`/api/restourant`, {
        method: "GET",
        headers: {
          "Content-type": " aplication/json",
        },
      })
        .then((resp) => resp.json())
        .then((data) => {
          console.log(data);
          setRestourants(data);
        })
        .catch((err) => {
          console.log(err);
          Toast({
            title: "Erro",
            description: err.message,
            status: "error",
            duration: 5000,
            isClosable: true,
            position: "top",
          });
        });
    };
    fetchApresentacoes();
  }, []);

  return (
    <main>
      <section className="home" id="home">
        <div className="home-left">
          <p className="home-subtext">Olá, amigo!</p>
          <h1 className="main-heading">
            Não cozinhamos, transportamos emoções!
          </h1>

          <p className="home-text">
            Descubra uma jornada culinária sem sair do conforto da sua casa! No
            nosso serviço de entrega de comida, oferecemos uma deliciosa
          </p>

          <div className="btn-group">
            <button className="btn btn-primary btn-icon">
              <img src={menu} alt="menu icon" />
              Nosso menu
            </button>

            <Link className="btn btn-secondary btn-icon" to="/login">
              <img src={arrow} alt="menu icon" />
              Sobre nós
            </Link>
          </div>
        </div>

        <div className="home-right">
          <img
            src={food1}
            alt="food image"
            className="food-img food-1"
            width="200"
            loading="lazy"
          />
          <img
            src={food2}
            alt="food image"
            className="food-img food-2"
            width="200"
            loading="lazy"
          />
          <img
            src={food3}
            alt="food image"
            className="food-img food-3"
            width="200"
            loading="lazy"
          />

          <img
            src={circle}
            alt="circle shape"
            className="shape shape-1"
            width="25"
          />
          <img
            src={circle}
            alt="circle shape"
            className="shape shape-2"
            width="15"
          />
          <img
            src={circle}
            alt="circle shape"
            className="shape shape-3"
            width="30"
          />
          <img
            src={ring}
            alt="ring shape"
            className="shape shape-4"
            width="60"
          />
          <img
            src={ring}
            alt="ring shape"
            className="shape shape-5"
            width="40"
          />
        </div>
      </section>
      <section className="about" id="about">
        <div className="about-left">
          <div className="img-box">
            <img
              src={about_image}
              alt="about image"
              className="about-img"
              width="250"
              loading="lazy"
            />
          </div>

          <div className="abs-content-box">
            <div className="dotted-border">
              <p className="number-lg">30</p>
              <p className="text-md">
                Minutos <br /> da sua porta
              </p>
            </div>
          </div>

          <img
            src={circle}
            alt="circle shape"
            className="shape shape-6"
            width="20"
          />
          <img
            src={circle}
            alt="circle shape"
            className="shape shape-7"
            width="30"
          />
          <img
            src={ring}
            alt="ring shape"
            className="shape shape-8"
            width="35"
          />
          <img
            src={ring}
            alt="ring shape"
            className="shape shape-9"
            width="80"
          />
        </div>

        <div className="about-right">
          <h2 className="section-title">Fazemos mais do que espera</h2>

          <p className="section-text">
            Explorar a vastidão da existência humana é como desbravar um oceano
            de emoções e experiências. Nesse percurso, encontramos desafios que
            moldam nossa jornada, mas também descobrimos momentos de pura
            alegria e aprendizado. Cada dia é um capítulo único, repleto de
            oportunidades para crescer, amar e explorar o extraordinário. A vida
            é a nossa tela, e nós somos os artistas, pintando com as cores
            vibrantes das nossas escolhas e paixões. Embarque nessa viagem
            única, celebrando a beleza de cada instante, e deixe que a vida
            desdobre suas maravilhas diante de você.
          </p>

          <p className="section-text">
            Consectetur adipisicing elit. Cupiditate nesciunt amet facilis
            numquam, nam adipisci qui voluptate voluptas enim obcaecati
            veritatis animi nulla, mollitia commodi quaerat ex, autem ea
            laborum.
          </p>
        </div>
      </section>
      <section className="services" id="services">
        <div className="service-card">
          <p className="card-number">01</p>
          <h3 className="card-heading">Entregas na cidade de Maputo</h3>

          <p className="card-text">
            Em um cenário dinâmico e vibrante como a cidade de Maputo, nossas
            entregas são conduzidas pela eficiência e compromisso. Navegamos
            pelas ruas movimentadas, trazendo a facilidade diretamente aos
            nossos clientes.
          </p>
        </div>

        <div className="service-card">
          <p className="card-number">02</p>
          <h3 className="card-heading">Entrega de comida saudável</h3>

          <p className="card-text">
            Na missão de promover um estilo de vida mais saudável, nossa entrega
            de comida não é apenas um serviço, mas sim um compromisso com o
            bem-estar. Cada refeição embala os benefícios de ingredientes
            frescos e escolhas conscientes.
          </p>
        </div>

        <div className="service-card">
          <p className="card-number">03</p>
          <h3 className="card-heading">Entrega rápida. 30 min Máximo</h3>

          <p className="card-text">
            Nossa promessa de entrega rápida é mais do que um compromisso, é um
            desafio que adotamos com paixão. Em até 30 minutos, garantimos que
            sua refeição chegará até você, fresca, saborosa e pronta para ser
            apreciada.
          </p>
        </div>

        <div className="service-card">
          <p className="card-number">04</p>
          <h3 className="card-heading">
            Entrega profissional do mais saboroso
          </h3>

          <p className="card-text">
            Em nossa busca pela excelência, entregamos não apenas refeições, mas
            uma experiência gastronômica profissional. Cada entrega é tratada
            com maestria, desde a seleção dos ingredientes mais frescos até a
            apresentação final em sua porta.
          </p>
        </div>

        <div className="service-card">
          <p className="card-number">05</p>
          <h3 className="card-heading">Os maiores padrões de serviço</h3>

          <p className="card-text">
            Na busca incessante pelos mais altos padrões de serviço,
            dedicamo-nos a superar suas expectativas a cada entrega. Cada
            refeição é mais do que um simples pedido; é um compromisso com a
            excelência em cada detalhe.
          </p>
        </div>
      </section>

      <section className="product" id="menu">
        <h2 className="section-title">Restaurantes mais populares</h2>

        <p className="section-text">
          Explore uma jornada culinária pelos restaurantes mais populares da
          cidade. Nossa seleção cuidadosamente curada apresenta uma variedade de
          sabores irresistíveis, desde pratos tradicionais até inovações
          gourmet.
        </p>

        <div className="products-grid">
          {restourants.length >= 0 ? (
            restourants.map((restourant) => (
              <Link to={`/comprar/${restourant._id}`} key={restourant._id}>
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
                      <h3 className="product-name">
                        {restourant.menu[0].name}
                      </h3>

                      <p className="product-price">
                        <span>{restourant.menu[0].price}</span>
                        <span className="small">MZN</span>
                      </p>
                    </div>

                    <p className="product-text">
                      {restourant.name}, {restourant.location}
                    </p>

                    <div className="product-rating">
                      <ion-icon name="star"></ion-icon>
                      <ion-icon name="star"></ion-icon>
                      <ion-icon name="star"></ion-icon>
                      <ion-icon name="star"></ion-icon>
                      <ion-icon name="star"></ion-icon>
                    </div>
                  </div>
                </div>
              </Link>
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

        <button className="btn btn-primary btn-icon">
          <img src={menu} alt="menu icon" />
          Menu completo
        </button>
      </section>

      <section className="testimonials" id="testimonials">
        <h2 className="section-title">O que dizem nossos clientes?</h2>

        <p className="section-text"></p>

        <div className="testimonials-grid">
          <div className="testimonials-card">
            <h4 className="card-title">Muito saboroso</h4>

            <div className="testimonials-rating">
              <ion-icon name="star"></ion-icon>
              <ion-icon name="star"></ion-icon>
              <ion-icon name="star"></ion-icon>
              <ion-icon name="star"></ion-icon>
              <ion-icon name="star"></ion-icon>
            </div>

            <p className="testimonials-text">
              Uma experiência de entrega incrível! A variedade de restaurantes
              populares tornou a escolha difícil, mas a entrega rápida e o
              profissionalismo do serviço fizeram toda a diferença. Sem dúvida,
              uma opção confiável para satisfazer meus desejos culinários.
            </p>

            <div className="customer-info">
              <div className="customer-img-box">
                <img
                  src={testimonials1}
                  alt="customer image"
                  className="customer-img"
                  width="100"
                  loading="lazy"
                />
              </div>

              <h5 className="customer-name">Emma Newman</h5>
            </div>
          </div>

          <div className="testimonials-card">
            <h4 className="card-title">Tenho lanche todos dias pontualmente</h4>

            <div className="testimonials-rating">
              <ion-icon name="star"></ion-icon>
              <ion-icon name="star"></ion-icon>
              <ion-icon name="star"></ion-icon>
              <ion-icon name="star"></ion-icon>
              <ion-icon name="star"></ion-icon>
            </div>

            <p className="testimonials-text">
              Adorei a praticidade e eficiência do serviço de entrega. A entrega
              rápida realmente cumpriu o prometido, e a qualidade da comida
              superou minhas expectativas. Fiquei impressionado com a
              diversidade de opções dos restaurantes mais populares da cidade.
              Recomendo a todos que buscam uma experiência gastronômica de alta
              qualidade.
            </p>

            <div className="customer-info">
              <div className="customer-img-box">
                <img
                  src={testimonials2}
                  alt="customer image"
                  className="customer-img"
                  width="100"
                  loading="lazy"
                />
              </div>

              <h5 className="customer-name">Paul Trueman</h5>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};
export default Main;
