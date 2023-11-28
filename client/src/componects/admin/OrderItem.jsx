import { Box, ListItem, Text, UnorderedList, VStack } from "@chakra-ui/react";
import PropTypes from "prop-types";
import { pattern } from "./colors";
const OrderItem = ({ order }) => {
  return (
    <Box
      key={order._id}
      w="100%"
      _hover={{
        cursor: "pointer",
      }}
      borderRadius="base"
      borderLeftColor={
        order.status == "PENDENTE"
          ? pattern.brown.border
          : order.status == "RESOLVIDO"
          ? pattern.green.border
          : pattern.red.border
      }
      borderLeftWidth="5px"
      background={
        order.status == "PENDENTE"
          ? pattern.brown.background
          : order.status == "RESOLVIDO"
          ? pattern.green.background
          : pattern.red.background
      }
      p={2}
      px={4}
    >
      <Box display="flex" justifyContent="space-between">
        <Text fontSize="lg" fontWeight="semibold">
          {order.location || "laulane"}
        </Text>
        <Text>{order.total}.00MZ</Text>
      </Box>
      <VStack spacing={1} alignItems="start">
        <Text>Pedido</Text>
        <UnorderedList>
          {order.cart &&
            order.cart.map((cart) => (
              <ListItem key={cart._id} alignSelf="start">
                {cart.name}({cart.quantity})
              </ListItem>
            ))}
        </UnorderedList>
        <Text fontWeight="bold">Nr: {order.ownerPhone}</Text>
      </VStack>
    </Box>
  );
};
OrderItem.propTypes = {
  order: PropTypes.object,
};
OrderItem.defaultProps = {
  order: {
    idFood: 46061,
    total: 870,
    local: "Laulane",
    distance: 14132,
    status: "PENDENTE",
    cart: [
      {
        _id: 111112392,
        name: "Sumo",
        description: "Cafe Turko, da turkia obviamente",
        price: 220,
        quantity: 1,
      },
    ],
  },
};

export default OrderItem;
