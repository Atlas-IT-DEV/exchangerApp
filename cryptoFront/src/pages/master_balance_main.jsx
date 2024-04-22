import { HStack, VStack } from "@chakra-ui/react";
import MasterBalance from "../components/master_balance";
import BlackButtonIcon from "../components/black_button_icon";
import Note from "../components/note";
import deposit from "./../assets/images/deposit.png";
import withdraw from "./../assets/images/withdraw.png";
import { useNavigate } from "react-router";
import tg from "../tg_vars";

const MasterMain = () => {
  const navigate = useNavigate();
  const backButton = tg.BackButton;
  backButton.show();
  backButton.onClick(back_page);
  function back_page() {
    navigate("/");
    backButton.hide();
  }
  return (
    <VStack width={"100%"} spacing={"10px"}>
      <HStack width={"100%"} height={"200px"}>
        <VStack width={"230px"} height={"inherit"} justify={"space-between"}>
          <MasterBalance balance={0} width="100%" />
          <HStack width={"100%"}>
            <BlackButtonIcon
              text={"DEPOSIT"}
              icon={deposit}
              route="/master_deposit1"
              additionalTextIcon={
                <svg
                  width="8"
                  height="8"
                  viewBox="0 0 8 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g filter="url(#filter0_i_55_1189)">
                    <circle
                      cx="4"
                      cy="4"
                      r="4"
                      fill="#27AD48"
                      fill-opacity="0.5"
                    />
                  </g>
                  <circle cx="4" cy="4" r="3" fill="#27AD48" />
                  <defs>
                    <filter
                      id="filter0_i_55_1189"
                      x="0"
                      y="0"
                      width="8"
                      height="12"
                      filterUnits="userSpaceOnUse"
                      color-interpolation-filters="sRGB"
                    >
                      <feFlood flood-opacity="0" result="BackgroundImageFix" />
                      <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="BackgroundImageFix"
                        result="shape"
                      />
                      <feColorMatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                      />
                      <feOffset dy="4" />
                      <feGaussianBlur stdDeviation="2" />
                      <feComposite
                        in2="hardAlpha"
                        operator="arithmetic"
                        k2="-1"
                        k3="1"
                      />
                      <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                      />
                      <feBlend
                        mode="normal"
                        in2="shape"
                        result="effect1_innerShadow_55_1189"
                      />
                    </filter>
                  </defs>
                </svg>
              }
            />
            <BlackButtonIcon
              text={"WITHDRAW"}
              icon={withdraw}
              route="/master_withdraw1"
              additionalTextIcon={
                <svg
                  width="8"
                  height="8"
                  viewBox="0 0 8 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g filter="url(#filter0_i_274_4)">
                    <circle
                      cx="4"
                      cy="4"
                      r="4"
                      fill="#BF1414"
                      fill-opacity="0.5"
                    />
                  </g>
                  <circle cx="4" cy="4" r="3" fill="#BF1414" />
                  <defs>
                    <filter
                      id="filter0_i_274_4"
                      x="0"
                      y="0"
                      width="8"
                      height="12"
                      filterUnits="userSpaceOnUse"
                      color-interpolation-filters="sRGB"
                    >
                      <feFlood flood-opacity="0" result="BackgroundImageFix" />
                      <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="BackgroundImageFix"
                        result="shape"
                      />
                      <feColorMatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                      />
                      <feOffset dy="4" />
                      <feGaussianBlur stdDeviation="2" />
                      <feComposite
                        in2="hardAlpha"
                        operator="arithmetic"
                        k2="-1"
                        k3="1"
                      />
                      <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 1 0 0 0 0 0 0 0 0 0 0.12 0 0 0 0.25 0"
                      />
                      <feBlend
                        mode="normal"
                        in2="shape"
                        result="effect1_innerShadow_274_4"
                      />
                    </filter>
                  </defs>
                </svg>
              }
            />
          </HStack>
        </VStack>
        <BlackButtonIcon
          width="100%"
          text={"STATS"}
          height="inherit"
          route="/master_stats"
        />
      </HStack>
      <Note
        text={`THIS IS THE MASTER BALANCE PAGE.
        HERE YOU ARE ABLE TO GENERATE MORE USDT THAN IN THE STANDARD BALANCE BY FREEZING YOUR DEPOSIT FOR A CERTAIN PERIOD (1,2 OR 4 MONTHS).

        MODS:
        X1.25 OF YOUR DEPOSIT (FREEZE FOR 1 MONTH)
        X1.55 OF YOUR DEPOSIT (FREEZE FOR 2 MONTHS)
        X2.25 OF YOUR DEPOSIT (FREEZE FOR 4 MONTHS)

        MASTER BALANCE ALLOWS YOU TO GENERATE MORE USDT, BUT BE PREPARED THAT YOUR DEPOSIT WILL NOT BE ABLE TO BE WITHDRAWN UNTIL YOUR CHOSEN FREEZE PERIOD ENDS.
        ON THIS PAGE YOU CAN CREATE DEPOSITS, GENERATE USDT AND WITHDRAW IT BACK TO YOUR CRYPTO WALLET.

        ALL DEPOSITS YOU CREATE WILL BE DISPLAYED IN THE “WITHDRAW” SECTION.`}
      />
    </VStack>
  );
};

export default MasterMain;
