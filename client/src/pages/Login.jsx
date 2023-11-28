import {
  Box,
  Button,
  Container,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Image,
  Input,
  Text,
  useToast,
  VStack,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import loginImage from "../assets/images/login.jpeg";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const [loading, setLoading] = useState(false);
  const Toast = useToast();
  const navigate = useNavigate();
  const onSubmit = async (user) => {
    setLoading(true);
    try {
      const data = await axios.post(`/api/auth/login`, user);

      if (!data) throw new Error("Falha na autenticação");
      navigate("/admin/home");
      Toast({
        title: "Bem vindo",
        status: "success",
        duration: 5000,
        isClosable: true,
        position: "top",
      });

      reset();
    } catch (error) {
      console.log(error);
      Toast({
        title: "Falha na Autenticação",
        description: "Password ou Username Incorrecto",
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
    <Container
      minW="100%"
      h="100vh"
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <Box
        borderRadius="base"
        boxShadow="base"
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        py="30px"
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
              <Text>Seja Bem vindo de Volta</Text>

              <VStack spacing={4} w="100%">
                <FormControl isInvalid={errors.username}>
                  <FormLabel>Username</FormLabel>
                  <Input
                    {...register("username", { required: "Preencha o campo" })}
                    placeholder="seu username"
                  />
                  <FormErrorMessage>
                    {errors.username && errors.username.message}
                  </FormErrorMessage>
                </FormControl>
                <FormControl isInvalid={errors.password}>
                  <FormLabel>Password</FormLabel>
                  <Input
                    {...register("password", { required: "Preencha o campo" })}
                    type="password"
                    placeholder="Sua password"
                  />
                  <FormErrorMessage>
                    {errors.password && errors.password.message}
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
                  Login
                </Button>
              </VStack>
            </VStack>
          </Box>
        </form>
      </Box>
    </Container>
  );
};

export default Login;
