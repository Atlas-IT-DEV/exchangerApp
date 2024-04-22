import { VStack, HStack, Text, Image } from "@chakra-ui/react";
import ColoredComponent from "./colored_component_wrapper";
import usdt_green from "./../assets/images/usdt_green.svg";

const ReferalBalance = ({
  balance,
  width = "178px",
  onClick = () => {
    console.log("hi");
  },
}) => {
  return (
    <VStack
      width={width}
      background={
        "linear-gradient(216deg, #131315 0%, #000 50.6%, #131315 100%)"
      }
      borderRadius={"14px"}
      padding={"10px"}
      onClick={onClick}
    >
      <HStack width={"100%"} justify={"space-between"} align={'flex-start'}>
        <Text fontSize={"9px"} color={"#289081"}>
          REFERRAL BALANCE
        </Text>
        <VStack spacing={0}>
          <Text fontSize={"9px"} color={"#289081"}>
            YOUR CODE
          </Text>
          <Text fontSize={"9px"} color={"white"}>
            ASDKAS92
          </Text>
        </VStack>
      </HStack>
      <HStack width={"100%"} justify={"space-between"}>
        <VStack align={"flex-start"} textAlign={"left"} spacing={0}>
          <Text fontSize={24} color={"white"}>
            {balance}
          </Text>
          <Text fontSize={"9px"} color={"white"}>
            USDT TRC 20
          </Text>
        </VStack>
        <VStack>
          <Image src={usdt_green} />
        </VStack>
      </HStack>
    </VStack>
  );
};

export default ReferalBalance;
