import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  FormControl,
  Button,
  FormLabel,
  FormErrorMessage,
  Input,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import PropTypes from "prop-types";
import { useForm } from "react-hook-form";

const PhoneOwner = ({ isOpen, onClose, handleCheckOut }) => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();
  const handleClick = (data) => {
    handleCheckOut(data);
    onClose();
  };
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <form onSubmit={handleSubmit(handleClick)}>
          <ModalHeader>Confirme seus dados</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl isInvalid={errors.ownerName}>
              <FormLabel>Nome</FormLabel>
              <Input
                {...register("ownerName", {
                  required: true,
                })}
              />
              <FormErrorMessage>
                {errors.ownerName && errors.ownerName.message}
              </FormErrorMessage>
            </FormControl>
            <FormControl>
              <FormLabel>Bairro </FormLabel>
              <Input {...register("location", { required: true })} />
            </FormControl>
            <FormControl isInvalid={errors.ownerPhone}>
              <FormLabel>Numero de celular</FormLabel>
              <Input
                {...register("ownerPhone", {
                  required: true,
                  pattern: {
                    value: /[0-9]{9}/,
                    message: "Cantacto Invalido",
                  },
                })}
              />
              <FormErrorMessage>
                {errors.ownerPhone && errors.ownerPhone.message}
              </FormErrorMessage>
            </FormControl>
          </ModalBody>

          <ModalFooter background="white">
            <Button colorScheme="blue" mx={3} type="submit">
              Submeter
            </Button>
            <Button mr={3} onClick={onClose}>
              voltar
            </Button>
          </ModalFooter>
        </form>
      </ModalContent>
    </Modal>
  );
};

PhoneOwner.propTypes = {
  isOpen: PropTypes.bool,
  onClose: PropTypes.func,
  handleCheckOut: PropTypes.func,
};

export default PhoneOwner;
