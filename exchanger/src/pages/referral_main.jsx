import { HStack, VStack } from "@chakra-ui/react";
import ReferalBalance from "../components/referal_balance";
import BlackButtonIcon from "../components/black_button_icon";
import Note from "../components/note";
import deposit from "./../assets/images/deposit.png";
import withdraw from "./../assets/images/withdraw.png";
import { useNavigate } from "react-router";
import tg from "../tg_vars";

const ReferalMain = () => {
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
          <ReferalBalance balance={0} width="100%" />
          <HStack width={"100%"}>
            <BlackButtonIcon
              text={"DEPOSIT"}
              icon={deposit}
              predictionalIcon={
                <svg
                  width="10"
                  height="10"
                  viewBox="0 0 21 21"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6.78769 6.78769L10.5 0L14.2123 6.78769L21 10.5L14.2123 14.2123L10.5 21L6.78769 14.2123L0 10.5L6.78769 6.78769Z"
                    fill="url(#paint0_linear_71_1118)"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_71_1118"
                      x1="10.5"
                      y1="0"
                      x2="-0.194456"
                      y2="11.9584"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="white" />
                      <stop offset="1" stop-color="#383838" />
                    </linearGradient>
                  </defs>
                </svg>
              }
            />
            <BlackButtonIcon
              text={"WITHDRAW"}
              icon={withdraw}
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
          route="/referal_stats"
        />
      </HStack>
      <Note
        text={`THIS IS THE STANDARD BALANCE PAGE.
                HERE YOU ARE ABLE TO GENERATE USDT WITH 0.66%/DAY RATE. ON THIS PAGE YOU CAN MAKE DEPOSITS, GENERATE USDT AND WITHDRAW IT BACK TO YOUR CRYPTO WALLET AT ANY TIME.`}
      />
    </VStack>
  );
};

export default ReferalMain;
