import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Image,
  Input,
  Text,
  useToast,
  VStack,
} from "@chakra-ui/react";
import axios from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form";
import loginImage from "../../assets/images/login.jpeg";
const AddRestaurant = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();
  const [loading, setLoading] = useState(false);
  const Toast = useToast();
  const onSubmit = async (data) => {
    setLoading(true);
    const temp = {
      name: data.name,
      location: data.location,
      position: {
        latitude: data.latitude,
        longitude: data.longitude,
      },
    };
    try {
      const restaurant = await axios.post("/api/restourant", temp);
      if (!restaurant) throw new Error("erro no servidor");

      Toast({
        title: `${data.name} adicionado com sucesso`,
        status: "success",
        duration: 5000,
        isClosable: true,
        position: "top",
      });
      reset();
    } catch (error) {
      Toast({
        title: "Erro no servidor",
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "top",
      });
    } finally {
      setLoading(false);
    }
  };
  return (
    <Box
      borderRadius="base"
      boxShadow="base"
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      py="30px"
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
          <VStack spacing={8} w="100%">
            <a href="#">
              <h3 className="logo" style={{ fontSize: "1.8rem" }}>
                EntregaFood
              </h3>
            </a>
            <Text>Adicione um Restaurante</Text>

            <VStack spacing={4} w="100%">
              <FormControl isInvalid={errors.username}>
                <FormLabel>Nome do Restaurante</FormLabel>
                <Input
                  {...register("name", { required: "Preencha o campo" })}
                  placeholder="eggs: Humburguer do Andre"
                />
                <FormErrorMessage>
                  {errors.name && errors.name.message}
                </FormErrorMessage>
              </FormControl>
              <FormControl isInvalid={errors.location}>
                <FormLabel>Localização</FormLabel>
                <Input
                  {...register("location", {
                    required: "Preencha o campo",
                    pattern: {
                      value: /^[a-zA-Z]{3,10}, [a-zA-Z]{3,10}/,
                      message: "Provincia, Bairro",
                    },
                  })}
                  placeholder="eggs: Maputo, Xipamanine"
                />
                <FormErrorMessage>
                  {errors.location && errors.location.message}
                </FormErrorMessage>
              </FormControl>
              <FormControl isInvalid={errors.latitude}>
                <FormLabel>latitude</FormLabel>
                <Input
                  {...register("latitude", {
                    required: "Preencha o campo",
                  })}
                  placeholder="eggs: 25.000"
                />
                <FormErrorMessage>
                  {errors.latitude && errors.latitude.message}
                </FormErrorMessage>
              </FormControl>
              <FormControl isInvalid={errors.longitude}>
                <FormLabel>Longitude</FormLabel>
                <Input
                  {...register("longitude", {
                    required: "Preencha o campo",
                  })}
                  placeholder="eggs: -25.000"
                />
                <FormErrorMessage>
                  {errors.longitude && errors.longitude.message}
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

export default AddRestaurant;
