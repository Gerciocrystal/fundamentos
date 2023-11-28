import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Image,
  Input,
  Text,
  Textarea,
  useToast,
  VStack,
} from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import loginImage from "../../assets/images/login.jpeg";
const AddMenu = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();
  const [id, setId] = useState(0);
  const [currentRestaurant, setCurrentRestaurant] = useState("");
  const [restaurants, setRestourants] = useState([]);
  const [loading, setLoading] = useState(false);
  const [fecthAgain, setFecthAgain] = useState(false);
  const Toast = useToast();
  const onSubmit = async (data) => {
    setLoading(true);

    try {
      const data1 = await axios.put(
        `/api/restourant/${currentRestaurant._id}`,
        {
          price: data.price,
          description: data.description,
          name: data.name,
        }
      );
      if (!data1) throw new Error("erro no servidor");

      Toast({
        title: `Novo prato adicionado com sucesso `,
        status: "success",
        duration: 5000,
        isClosable: true,
        position: "top",
      });
      setFecthAgain(!fecthAgain);
      reset();
    } catch (error) {
      Toast({
        title: "Aviso",
        status: "error",
        error: error.message,
        duration: 5000,
        isClosable: true,
        position: "top",
      });
    } finally {
      setLoading(false);
    }
  };
  const fecthRestaurant = (idTemp) => {
    setId(idTemp);
    let isFound = false;
    restaurants.map((restaurant) => {
      if (restaurant.restourantId == idTemp) {
        setCurrentRestaurant(restaurant);
        isFound = true;
      }
    });
    if (!isFound) {
      setCurrentRestaurant({ name: "" });
      Toast({
        title: "Restaurante não encontrado",
        status: "warning",
        isClosable: true,
        position: "top",
        duration: 5000,
      });
    }
  };
  useEffect(() => {
    const fetchApresentacoes = async () => {
      fetch(`/api/restourant/`, {
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
          setFecthAgain(!fecthAgain);
          console.log(err);
          Toast({
            title: "Erro",
            description: "Erro de conexcão .",
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
    <Box
      borderRadius="base"
      boxShadow="base"
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      py="20px"
      mx="250px"
    >
      <Image src={loginImage} alt="logo photo" boxSize="440px" />
      <form onSubmit={handleSubmit(onSubmit)}>
        <Box
          width="320px"
          borderRadius="base"
          m={1}
          background="white"
          px="15px"
        >
          <VStack spacing={3} w="100%">
            <a href="#">
              <h3 className="logo" style={{ fontSize: "1.8rem" }}>
                EntregaFood
              </h3>
            </a>
            <Text>Adicione o menu aqui</Text>
            <VStack spacing={2} w="100%">
              <FormControl>
                <FormLabel>id do Restaurante</FormLabel>
                <Input
                  type="text"
                  value={id}
                  onChange={(e) => fecthRestaurant(e.target.value)}
                />
              </FormControl>
              <FormControl>
                <FormLabel>Nome do Restaurante</FormLabel>
                <Input isInvalid={true} value={currentRestaurant.name} />
              </FormControl>
              <FormControl isInvalid={errors.name}>
                <FormLabel>Nome</FormLabel>
                <Input
                  {...register("name", {
                    required: "Preencha o campo",
                  })}
                  placeholder="eggs: café"
                />
                <FormErrorMessage>
                  {errors.name && errors.name.message}
                </FormErrorMessage>
              </FormControl>
              <FormControl isInvalid={errors.price}>
                <FormLabel>Preço</FormLabel>
                <Input
                  {...register("price", {
                    required: "Preencha o campo",
                  })}
                  placeholder="eggs: 250"
                />
                <FormErrorMessage>
                  {errors.price && errors.price.message}
                </FormErrorMessage>
              </FormControl>
              <FormControl isInvalid={errors.description}>
                <FormLabel>Descricão</FormLabel>
                <Textarea
                  {...register("description", {
                    required: "Preencha o campo",
                  })}
                  placeholder="eggs: -25.000"
                />
                <FormErrorMessage>
                  {errors.description && errors.description.message}
                </FormErrorMessage>
              </FormControl>
              <Button
                isLoading={loading}
                type="submit"
                background="black"
                color="white"
                borderRadius="md"
                width="100%"
              >
                Submit
              </Button>
            </VStack>
          </VStack>
        </Box>
      </form>
    </Box>
  );
};

export default AddMenu;
