import { Stat, VStack } from "@chakra-ui/react";
import Note from "../components/note";
import tg from "../tg_vars";
import { useNavigate } from "react-router";
import DepositCard from "../components/deposit_card";

const MasterDeposit1 = () => {
  const navigate = useNavigate();
  const backButton = tg.BackButton;
  backButton.show();
  backButton.onClick(back_page);
  function back_page() {
    navigate("/master_main");
    backButton.hide();
  }
  return (
    <VStack width={"100%"}>
      <DepositCard route="/master_choose" />
      <Note
        text={`ENTER YOUR DEPOSIT AMOUNT IN USDT TRC20.

        ENTER YOUR CRYPTO WALLET ADDRESS SO THAT WE CAN TRACK THE TRANSACTION.`}
      />
    </VStack>
  );
};

export default MasterDeposit1;
