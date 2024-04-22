import { VStack, HStack, Text, Image } from "@chakra-ui/react";
import ColoredComponent from "./colored_component_wrapper";
import usdt_logo from "./../assets/images/usdt_logo.svg";

const BalanceColored = ({ balance, width = '178px', onClick=() => {} }) => {
  return (
    <ColoredComponent width={width} onClick={onClick}>
      <HStack width={"100%"} justify={"space-between"}>
        <Text fontSize={"9px"} color={"black"}>
          BALANCE
        </Text>
        <svg
          width="5"
          height="8"
          viewBox="0 0 5 8"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0.753715 8L0 7.29L3.49257 4L0 0.71L0.753715 0L5 4L0.753715 8Z"
            fill="#1C1B1F"
          />
        </svg>
      </HStack>
      <HStack width={"100%"} justify={"space-between"}>
        <VStack align={'flex-start'} textAlign={'left'} spacing={0}>
          <Text fontSize={24} color={"black"}>
            {balance}
          </Text>
          <Text fontSize={"9px"} color={"black"}>
            USDT TRC 20
          </Text>
        </VStack>
        <VStack>
          <Image src={usdt_logo} />
        </VStack>
      </HStack>
    </ColoredComponent>
  );
};

export default BalanceColored;
