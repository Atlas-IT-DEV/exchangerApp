import { VStack, HStack, Text } from "@chakra-ui/react";
import Note from "../components/note";
import tg from "../tg_vars";
import { useNavigate } from "react-router";

const arrow = (
  <svg
    width="7"
    height="8"
    viewBox="0 0 7 8"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M6.1167 4L0.0342223 7.4641L0.0342226 0.535898L6.1167 4Z"
      fill="white"
    />
  </svg>
);

const MasterChoose = () => {
  const navigate = useNavigate();
  const backButton = tg.BackButton;
  backButton.show();
  backButton.onClick(back_page);
  function back_page() {
    navigate("/master_deposit1");
    backButton.hide();
  }
  return (
    <VStack width={"100%"}>
      <VStack
        width={"100%"}
        borderRadius={"14px"}
        background={
          "linear-gradient(216deg, #131315 0%, #000 50.6%, #131315 100%)"
        }
        padding={"10px"}
        spacing={"30px"}
      >
        <HStack alignSelf={"center"} justify={"center"}>
          <Text fontSize={"10px"} color={"white"}>
            DEPOSIT CARD
          </Text>
          <svg
            width="8"
            height="8"
            viewBox="0 0 8 8"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="4" cy="4" r="4" fill="#1EB85B" fill-opacity="0.5" />
            <circle cx="4" cy="4" r="4" fill="#1EB85B" fill-opacity="0.5" />
            <circle cx="4" cy="4" r="3" fill="#1EB85B" />
          </svg>
        </HStack>
        <HStack width={"100%"} justify={"flex-start"}>
          {arrow}
          <Text fontSize={"10px"} color={"white"} alignSelf={"center"}>
            CHOOSE THE MODE
          </Text>
        </HStack>
        <HStack>
          <VStack
            width={"70px"}
            padding={"5px"}
            background={
              "linear-gradient(31deg, #28afd0 0%, #648fd5 37.5%, #9972d9 68%, #7071d5 100%)"
            }
            borderRadius={"14px"}
            onClick={() => navigate("/master_deposit2")}
          >
            <Text fontSize={"10px"}>x1.25</Text>
            <svg
              width="10"
              height="10"
              viewBox="0 0 10 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="5" cy="5" r="5" fill="#BF1414" />
            </svg>
            <Text fontSize={"10px"} textAlign={"center"}>
              1 MONTH HOLD
            </Text>
          </VStack>
          <VStack
            width={"70px"}
            padding={"5px"}
            background={
              "linear-gradient(31deg, #28afd0 0%, #648fd5 37.5%, #9972d9 68%, #7071d5 100%)"
            }
            borderRadius={"14px"}
            onClick={() => navigate("/master_deposit2")}
          >
            <Text fontSize={"10px"}>x1.25</Text>
            <svg
              width="10"
              height="10"
              viewBox="0 0 10 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="5" cy="5" r="5" fill="#BF1414" />
            </svg>
            <Text fontSize={"10px"} textAlign={"center"}>
              1 MONTH HOLD
            </Text>
          </VStack>
          <VStack
            width={"70px"}
            padding={"5px"}
            background={
              "linear-gradient(31deg, #28afd0 0%, #648fd5 37.5%, #9972d9 68%, #7071d5 100%)"
            }
            borderRadius={"14px"}
            onClick={() => navigate("/master_deposit2")}
          >
            <Text fontSize={"10px"}>x1.25</Text>
            <svg
              width="10"
              height="10"
              viewBox="0 0 10 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="5" cy="5" r="5" fill="#BF1414" />
            </svg>
            <Text fontSize={"10px"} textAlign={"center"}>
              1 MONTH HOLD
            </Text>
          </VStack>
        </HStack>
      </VStack>
      <Note
        text={`THIS IS THE STANDARD BALANCE PAGE.
        HERE YOU ARE ABLE TO GENERATE USDT WITH 0.66%/DAY RATE. ON THIS PAGE YOU CAN MAKE DEPOSITS, GENERATE USDT AND WITHDRAW IT BACK TO YOUR CRYPTO WALLET AT ANY TIME.`}
      />
    </VStack>
  );
};

export default MasterChoose;
