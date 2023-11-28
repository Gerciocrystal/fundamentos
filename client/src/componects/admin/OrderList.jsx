import { Box, HStack, Text, VStack } from "@chakra-ui/react";
import PropTypes from "prop-types";
import { pattern } from "./colors";
import OrderItem from "./OrderItem";

const OrderList = ({ orders }) => {
  console.log(orders);
  return (
    <Box
      display={{ base: "none", md: "block" }}
      width="350px"
      background="#fff"
      borderRadius="base"
      boxShadow="base"
      h="75vh"
      p={3}
      overflow="hidden"
    >
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        mb={3}
      >
        <Text fontSize="lg" fontWeight="semibold">
          Pedidos
        </Text>
        <HStack spacing={2} fontSize="sm" alignSelf="end">
          <Box p={2} background={pattern.brown.background}>
            Pend
          </Box>
          <Box p={2} background={pattern.green.background}>
            Atendidos
          </Box>
          <Box p={2} background={pattern.red.background}>
            Cancelados
          </Box>
        </HStack>
      </Box>
      <VStack spacing={3} overflowY="scroll" height="90%">
        {orders.map((order) => (
          <OrderItem key={order._id} order={order} />
        ))}
      </VStack>
    </Box>
  );
};

OrderList.propTypes = {
  orders: PropTypes.array,
};

export default OrderList;
