import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  Button,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  VStack,
  Text,
} from "@chakra-ui/react";
import PropTypes from "prop-types";
const ConfirmSubmit = ({ isOpen, onClose, distance, cart, total }) => {
  console.log(cart);
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Confirmar o Pedido</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <VStack spacing={3}>
            <Text>distance: {distance}</Text>
            <Text>distance: {total}</Text>
          </VStack>
        </ModalBody>

        <ModalFooter>
          <Button colorScheme="blue" mr={3} onClick={onClose}>
            Close
          </Button>
          <Button variant="ghost">Secondary Action</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
ConfirmSubmit.propTypes = {
  isOpen: PropTypes.bool,
  onClose: PropTypes.func,
  distance: PropTypes.number,
  cart: PropTypes.object,
  total: PropTypes.number,
};
export default ConfirmSubmit;
