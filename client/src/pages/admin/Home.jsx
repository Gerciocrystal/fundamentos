import { Box, useToast } from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";
import AddMenu from "../../componects/admin/AddMenu";
import AddRestaurant from "../../componects/admin/AddRestaurant";
import ChatLoading from "../../componects/admin/ChatLoading";
import Header from "../../componects/admin/Header";
import BarChart from "../../componects/admin/misselection/BarChart";
import CostumPieChart from "../../componects/admin/misselection/CostumPieChart";
import OrderList from "../../componects/admin/OrderList";
const Home = () => {
  const [orders, setOrders] = useState([]);
  const [currentSection, setCurrentSection] = useState("home");
  const [relavants, setRelevants] = useState([
    { nome: "Humburguer duplo", count: 2 },
    { nome: "Sumo", count: 4 },
    { nome: "Cafe", count: 8 },
  ]);
  const [restaurants, setRestaurants] = useState([
    { _id: "Rolote dos Apaixonados", value: 20 },
    { _id: "Chine food", value: 10 },
    { _id: "Bambo Humburguer", value: 15 },
  ]);
  const [loading, setLoading] = useState(true);
  const Toast = useToast();
  const fecthOrders = async () => {
    try {
      const { data } = await axios.get("/api/order/");
      const { data: rest } = await axios.get("/api/order/report");
      const { data: status } = await axios.get("/api/order/report/status");
      if (!data) throw new Error("Falha de conexão");
      console.log(data);
      setRelevants(rest);
      setRestaurants(status);

      setOrders(data);
      setLoading(false);
    } catch (error) {
      console.log(error);
      Toast({
        title: "Bem vindo",
        status: "success",
        duration: 5000,
        isClosable: true,
        position: "top",
      });
    }
  };
  useEffect(() => {
    fecthOrders();
  }, []);
  return (
    <div className="container" style={{ height: "100vh", overflow: "hidden" }}>
      <Header
        setCurrentSection={setCurrentSection}
        currentSection={currentSection}
      />
      <main>
        <section className=" dashboard">
          {currentSection == "home" && (
            <Box width="100%" display="flex" justifyContent="space-between">
              <Box display="flex" flex={1} py={9}>
                <BarChart data={relavants} />
                <CostumPieChart data={restaurants} />
              </Box>
              {!loading ? <OrderList orders={orders} /> : <ChatLoading />}
            </Box>
          )}
          {currentSection == "newRestaurant" && <AddRestaurant />}
          {currentSection == "editRestaurant" && <AddMenu />}
        </section>
      </main>
    </div>
  );
};

export default Home;
