import { HStack, VStack, Text } from "@chakra-ui/react";

const Stats = ({ deposited, generated, withdrawn }) => {
  return (
    <VStack
      width={"100%"}
      borderRadius={"14px"}
      background={
        "linear-gradient(216deg, #493254 0%, #000 58.15%, #131315 100%)"
      }
      padding={"10px"}
    >
      <HStack alignSelf={"center"} justifySelf={"center"}>
        <Text color={"white"} fontSize={10}>
          STATS
        </Text>
        <svg
          width="8"
          height="8"
          viewBox="0 0 8 8"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="4" cy="4" r="4" fill="#6C558A" fill-opacity="0.5" />
          <circle cx="4" cy="4" r="3" fill="#6C558A" />
        </svg>
      </HStack>
      <VStack alignSelf={"flex-start"} align={"flex-start"} spacing={"20px"}>
        <VStack align={"flex-start"}>
          <HStack>
            <svg
              width="6"
              height="8"
              viewBox="0 0 6 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6 4L1.50571e-07 7.4641L4.53412e-07 0.535898L6 4Z"
                fill="#6C558A"
              />
            </svg>
            <Text color={"#6c558a"} fontSize={10}>
              OVERALL DEPOSITED
            </Text>
          </HStack>
          <Text color={"white"} fontSize={10}>
            {deposited} USDT TRC 20
          </Text>
        </VStack>
        <VStack align={"flex-start"}>
          <HStack>
            <svg
              width="6"
              height="8"
              viewBox="0 0 6 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6 4L1.50571e-07 7.4641L4.53412e-07 0.535898L6 4Z"
                fill="#6C558A"
              />
            </svg>
            <Text color={"#6c558a"} fontSize={10}>
              OVERALL GENERATED
            </Text>
          </HStack>
          <Text color={"white"} fontSize={10}>
            {generated} USDT TRC 20
          </Text>
        </VStack>
        <VStack align={"flex-start"}>
          <HStack>
            <svg
              width="6"
              height="8"
              viewBox="0 0 6 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6 4L1.50571e-07 7.4641L4.53412e-07 0.535898L6 4Z"
                fill="#6C558A"
              />
            </svg>
            <Text color={"#6c558a"} fontSize={10}>
              OVERALL WITHDRAWN
            </Text>
          </HStack>
          <Text color={"white"} fontSize={10}>
            {withdrawn} USDT TRC 20
          </Text>
        </VStack>
      </VStack>
    </VStack>
  );
};

export default Stats;
