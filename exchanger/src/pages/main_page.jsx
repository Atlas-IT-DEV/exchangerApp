import { HStack, VStack, Text, Table, Td, Tr } from "@chakra-ui/react";
import MainContainerPage from "../components/main_container_page";
import InfoHeaderMainPage from "../components/main_page/info_header";
import BlackButtonIcon from "../components/black_button_icon";
import star from "./../assets/images/star.png";
import faq from "./../assets/images/faq.png";
import earbuds from "./../assets/images/earbuds.png";
import calc from "./../assets/images/calc.svg";
import megafon from "./../assets/images/megafon.svg";
import { SimpleGrid } from "@chakra-ui/react";
import BalanceColored from "../components/balance_colored";
import MasterBalance from "../components/master_balance";
import { useNavigate } from "react-router";

const Main = () => {
  const navigate = useNavigate();
  return (
    <VStack width="100%">
      <InfoHeaderMainPage />
      <HStack width={"100%"} justify={"space-between"}>
        <BlackButtonIcon
          text={"LIVE SUPPORT"}
          icon={earbuds}
          additionalTextIcon={
            <svg
              width="6"
              height="6"
              viewBox="0 0 6 6"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="3" cy="3" r="3" fill="#AF0000" />
            </svg>
          }
        />
        <BlackButtonIcon text={"FAQ"} icon={faq} />
        <BlackButtonIcon text={"ABOUT US"} icon={star} />
      </HStack>
      <HStack width={"100%"} align={"flex-start"}>
        <VStack>
          <BalanceColored
            balance={2}
            onClick={() => navigate("standart_main")}
          />
          <MasterBalance balance={0} onClick={() => navigate("master_main")} />
        </VStack>
        <BlackButtonIcon
          text={"CALC INCOME"}
          icon={calc}
          width="170px"
          height="180px"
          route="calc_income"
        />
      </HStack>

      <BlackButtonIcon
        text={"REFERAL"}
        icon={megafon}
        width="100%"
        height="auto"
        route="/referal_main"
      />
      <BlackButtonIcon text={"UPDATES"} width="100%" height="30vh" />
    </VStack>
  );
};

export default Main;
