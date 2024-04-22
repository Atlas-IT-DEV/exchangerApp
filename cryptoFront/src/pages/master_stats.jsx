import { Stat, VStack } from "@chakra-ui/react";
import Stats from "../components/stats";
import Note from "../components/note";
import { useNavigate } from "react-router";
import tg from "../tg_vars";

const MasterStats = () => {
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
      <Stats withdrawn={0} deposited={0} generated={0} />
      <Note text={"THIS PAGE DISPLAYS YOUR ACTIVITY IN THE MASTER BALANCE."} />
    </VStack>
  );
};

export default MasterStats;
