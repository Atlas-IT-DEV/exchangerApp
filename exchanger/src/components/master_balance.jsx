import { VStack, HStack, Text, Image } from "@chakra-ui/react";
import ColoredComponent from "./colored_component_wrapper";

const MasterBalance = ({ balance }) => {
  return (
    <VStack
      width={"170px"}
      background={
        "linear-gradient(216deg, #131315 0%, #000 50.6%, #131315 100%)"
      }
      borderRadius={"14px"}
      padding={"10px"}
    >
      <HStack width={"100%"} justify={"space-between"}>
        <Text
          fontSize={"9px"}
          color={"black"}
          background={
            " linear-gradient(88deg, #e19e13 0%, #ea743d 16.67%, #db5356 33.33%, #b94a70 50%, #b44d88 62.1%, #395cf9 76.1%, #00c2ff 94.1%)"
          }
          backgroundClip={"text"}
        >
          MASTER BALANCE
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
        <VStack align={"flex-start"} textAlign={"left"} spacing={0}>
          <Text fontSize={24} color={"white"}>
            {balance}
          </Text>
          <Text fontSize={"9px"} color={"white"}>
            USDT TRC 20
          </Text>
        </VStack>
        <VStack>
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16 32C24.8366 32 32 24.8366 32 16C32 7.16344 24.8366 0 16 0C7.16344 0 0 7.16344 0 16C0 24.8366 7.16344 32 16 32Z"
              fill="#49535C"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M18.0335 17.6764V17.6743C17.9197 17.6824 17.3326 17.7168 16.0228 17.7168C14.977 17.7168 14.2408 17.6865 13.982 17.6743V17.6774C9.95631 17.5044 6.95154 16.8194 6.95154 15.9999C6.95154 15.1814 9.95631 14.4964 13.982 14.3204V16.9954C14.245 17.0137 14.9988 17.0572 16.0404 17.0572C17.2901 17.0572 17.9165 17.0066 18.0335 16.9965V14.3224C22.0509 14.4974 25.0485 15.1824 25.0485 15.9999C25.0485 16.8194 22.0509 17.5023 18.0335 17.6764ZM18.0335 14.0442V11.6504H23.6393V8H8.37627V11.6504H13.982V14.0432C9.42617 14.2475 6 15.1298 6 16.186C6 17.2423 9.42617 18.1235 13.982 18.3289V26H18.0335V18.3269C22.5821 18.1225 26 17.2413 26 16.186C26 15.1308 22.5821 14.2496 18.0335 14.0442Z"
              fill="#09090B"
            />
          </svg>
        </VStack>
      </HStack>
    </VStack>
  );
};

export default MasterBalance;
