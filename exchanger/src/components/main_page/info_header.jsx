import { HStack, Image, VStack, Text } from "@chakra-ui/react";

import tg from "../../tg_vars";
import no_photo from "./../../assets/images/no_photo_user.png";
import telegramm_icon from "./../../assets/images/telegram.svg";
import { useNavigate } from "react-router";

const InfoHeaderMainPage = () => {
  const navigate = useNavigate();
  return (
    <HStack width={"100%"} justify={"space-between"}>
      <HStack align={"center"} onClick={() => navigate("/profile")}>
        <VStack justify={"center"}>
          <Image
            width={"33px"}
            height={"33px"}
            src={
              tg.initDataUnsafe.user ? tg.initDataUnsafe.user.photo : no_photo
            }
          />
        </VStack>

        <VStack justify={"flex-start"} spacing={0} padding={0}>
          <Text fontSize={"15px"} color={"white"}>
            {tg.initDataUnsafe.user
              ? tg.initDataUnsafe.user.user_name
              : "Maria"}{" "}
            {">"}
          </Text>
          <Text
            fontSize={"10px"}
            color={"black"}
            backgroundColor={"white"}
            borderRadius={"4px"}
            padding={"0px 2px"}
          >
            Normal
          </Text>
        </VStack>
      </HStack>
      <a href="#">
        <HStack
          background={"#101010"}
          borderRadius={"32px"}
          width={"105px"}
          height={"35px"}
          padding={"3px"}
        >
          <Image src={telegramm_icon} />
        </HStack>
      </a>
    </HStack>
  );
};

export default InfoHeaderMainPage;
