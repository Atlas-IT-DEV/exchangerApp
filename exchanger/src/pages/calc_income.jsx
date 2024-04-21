import { VStack, HStack } from "@chakra-ui/react";
import Note from "../components/note";
import tg from "../tg_vars";
import { useNavigate } from "react-router";
import StandartCalc from "../components/standart_calc";
import MasterCalc from "../components/master_calc";

const CalcIncome = () => {
  const navigate = useNavigate();
  const backButton = tg.BackButton;
  backButton.show();
  backButton.onClick(back_page);
  function back_page() {
    navigate("/referal_main");
    backButton.hide();
  }
  return (
    <VStack width={"100%"}>
      <HStack width="100%" justify={"space-between"}>
        <StandartCalc />
        <MasterCalc />
      </HStack>

      <Note
        text={
          "THIS IS THE CALC PAGE.HERE YOU CAN CALCULATE HOW MUCH USDT YOU COULD GENERATE IN THE SYSTEM USING THE STANDARD OR MASTER BALANCE."
        }
      />
    </VStack>
  );
};

export default CalcIncome;
